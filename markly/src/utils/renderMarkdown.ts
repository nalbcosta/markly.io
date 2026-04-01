function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function formatInline(text: string): string {
	let html = escapeHtml(text);

	html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
	html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
	html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
	html = html.replace(
		/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
		'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
	);

	return html;
}

function parseParagraph(lines: string[], startIndex: number): { html: string; nextIndex: number } {
	const paragraphLines: string[] = [];
	let index = startIndex;

	while (index < lines.length) {
		const current = lines[index];

		if (current.trim().length === 0) {
			break;
		}

		if (/^#{1,6}\s+/.test(current) || /^[-*]\s+/.test(current) || current.startsWith("```")) {
			break;
		}

		paragraphLines.push(current.trim());
		index += 1;
	}

	return {
		html: `<p>${formatInline(paragraphLines.join(" "))}</p>`,
		nextIndex: index,
	};
}

function parseList(lines: string[], startIndex: number): { html: string; nextIndex: number } {
	const items: string[] = [];
	let index = startIndex;

	while (index < lines.length) {
		const match = lines[index].match(/^[-*]\s+(.+)$/);
		if (!match) {
			break;
		}

		items.push(`<li>${formatInline(match[1])}</li>`);
		index += 1;
	}

	return {
		html: `<ul>${items.join("")}</ul>`,
		nextIndex: index,
	};
}

function parseCodeBlock(lines: string[], startIndex: number): { html: string; nextIndex: number } {
	const codeLines: string[] = [];
	let index = startIndex + 1;

	while (index < lines.length && !lines[index].startsWith("```")) {
		codeLines.push(lines[index]);
		index += 1;
	}

	const nextIndex = index < lines.length ? index + 1 : index;

	return {
		html: `<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
		nextIndex,
	};
}

export function renderMarkdownToHtml(markdown: string): string {
	const lines = markdown.replace(/\r\n/g, "\n").split("\n");
	const chunks: string[] = [];
	let index = 0;

	while (index < lines.length) {
		const line = lines[index];
		const trimmed = line.trim();

		if (trimmed.length === 0) {
			index += 1;
			continue;
		}

		if (line.startsWith("```")) {
			const parsed = parseCodeBlock(lines, index);
			chunks.push(parsed.html);
			index = parsed.nextIndex;
			continue;
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch) {
			const level = headingMatch[1].length;
			chunks.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`);
			index += 1;
			continue;
		}

		if (/^[-*]\s+/.test(line)) {
			const parsed = parseList(lines, index);
			chunks.push(parsed.html);
			index = parsed.nextIndex;
			continue;
		}

		const parsed = parseParagraph(lines, index);
		chunks.push(parsed.html);
		index = parsed.nextIndex;
	}

	return chunks.join("\n");
}
