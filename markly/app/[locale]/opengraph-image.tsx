import { renderOpenGraphImage } from "../opengraph-image";

export const runtime = "edge";
export const alt = "Markly.io";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function LocaleOpenGraphImage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	return renderOpenGraphImage(locale === "en" ? "en" : "pt");
}
