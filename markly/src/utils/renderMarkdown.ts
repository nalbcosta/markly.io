const SAFE_HTML_TAGS = new Set([
	"div", "p", "span", "a", "img", "br", "hr",
	"table", "tr", "td", "th", "thead", "tbody",
	"details", "summary", "center", "blockquote",
	"h1", "h2", "h3", "h4", "h5", "h6",
	"b", "i", "em", "strong", "code", "kbd", "sub", "sup", "samp",
	"ul", "ol", "li",
]);

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function sanitizeHtmlBlock(html: string): string {
	return html
		.replace(/\s+on\w+\s*=\s*"[^"]*"/gi, "")
		.replace(/\s+on\w+\s*=\s*'[^']*'/gi, "")
		.replace(/href\s*=\s*"javascript:[^"]*"/gi, 'href="#"')
		.replace(/src\s*=\s*"javascript:[^"]*"/gi, 'src=""');
}

function parseHtmlBlock(lines: string[], startIndex: number): { html: string; nextIndex: number } {
	const trimmed = lines[startIndex].trim();

	const tagMatch = trimmed.match(/^<\/?(\w[\w-]*)/);
	if (!tagMatch) {
		return { html: escapeHtml(lines[startIndex]), nextIndex: startIndex + 1 };
	}

	const tagName = tagMatch[1].toLowerCase();

	// Void elements — emit single line
	if (tagName === "img" || tagName === "br" || tagName === "hr") {
		return { html: sanitizeHtmlBlock(trimmed), nextIndex: startIndex + 1 };
	}

	// Single-line block with closing tag
	if (trimmed.includes(`</${tagName}>`)) {
		return { html: sanitizeHtmlBlock(trimmed), nextIndex: startIndex + 1 };
	}

	// Multi-line: collect until closing tag
	const blockLines = [lines[startIndex]];
	let index = startIndex + 1;

	while (index < lines.length) {
		blockLines.push(lines[index]);
		if (lines[index].trim().includes(`</${tagName}>`)) {
			index += 1;
			break;
		}
		index += 1;
	}

	return { html: sanitizeHtmlBlock(blockLines.join("\n")), nextIndex: index };
}

function formatInline(text: string): string {
	let html = escapeHtml(text);

	html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
	// Images before links so [![img](url)](link) renders correctly
	html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
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
		const trimmed = current.trim();

		if (trimmed.length === 0) break;

		if (
			/^#{1,6}\s+/.test(current) ||
			/^[-*]\s+/.test(current) ||
			current.startsWith("```") ||
			/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed) ||
			(trimmed.startsWith("<") && SAFE_HTML_TAGS.has((trimmed.match(/^<\/?(\w[\w-]*)/) ?? [])[1]?.toLowerCase() ?? ""))
		) {
			break;
		}

		paragraphLines.push(trimmed);
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
		if (!match) break;

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

		// Horizontal rule
		if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
			chunks.push("<hr>");
			index += 1;
			continue;
		}

		// HTML block passthrough
		const htmlTagMatch = trimmed.match(/^<\/?(\w[\w-]*)/);
		if (htmlTagMatch && SAFE_HTML_TAGS.has(htmlTagMatch[1].toLowerCase())) {
			const parsed = parseHtmlBlock(lines, index);
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
