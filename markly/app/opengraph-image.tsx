import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Markly.io";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type OgLocale = "pt" | "en";

type OgCopy = {
  subtitle: string;
  headline: string;
  features: [string, string, string];
  stats: [
    [label: string, value: string],
    [label: string, value: string],
    [label: string, value: string],
  ];
};

const COPY_BY_LOCALE: Record<OgLocale, OgCopy> = {
  en: {
    subtitle: "README builder for standout GitHub profiles",
    headline: "Create, preview, and publish a professional README in minutes.",
    features: ["Realtime markdown preview", "Professional templates", "One-click export"],
    stats: [
      ["Template", "Developer Minimal"],
      ["Sections", "+8 highlight blocks"],
      ["Export", "README.md"],
    ],
  },
  pt: {
    subtitle: "Criador de README para perfis GitHub de destaque",
    headline: "Crie, visualize e publique um README profissional em minutos.",
    features: ["Preview markdown em tempo real", "Templates profissionais", "Exportacao em 1 clique"],
    stats: [
      ["Template", "Developer Minimal"],
      ["Secoes", "+8 blocos de destaque"],
      ["Export", "README.md"],
    ],
  },
};

function MarklyMark({ sizePx = 128 }: { sizePx?: number }) {
  return (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#4f46e5" />
      <polygon points="13,9 6,33 13,33" fill="#ffffff" />
      <polygon points="13,9 20,20 20,33 13,33" fill="rgba(255,255,255,0.56)" />
      <polygon points="20,20 27,9 27,33 20,33" fill="rgba(255,255,255,0.56)" />
      <polygon points="27,9 34,33 27,33" fill="#ffffff" />
    </svg>
  );
}

export function renderOpenGraphImage(locale: OgLocale = "pt") {
  const copy = COPY_BY_LOCALE[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(145deg, #f5f7ff 0%, #e9eeff 55%, #dde6ff 100%)",
          color: "#15193a",
          fontFamily: "DM Sans, Noto Sans, system-ui, sans-serif",
          overflow: "hidden",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -120,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "rgba(79, 70, 229, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -140,
            bottom: -220,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "rgba(79, 70, 229, 0.1)",
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            border: "1px solid rgba(79, 70, 229, 0.22)",
            borderRadius: 28,
            background: "rgba(255, 255, 255, 0.7)",
            boxShadow: "0 16px 36px rgba(17, 24, 39, 0.08)",
            backdropFilter: "blur(2px)",
            padding: "44px 46px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <MarklyMark sizePx={72} />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    fontSize: 46,
                    fontWeight: 800,
                    letterSpacing: -1,
                    color: "#141a39",
                  }}
                >
                  Markly.io
                </div>
                <div
                  style={{
                    fontSize: 22,
                    color: "#4f46e5",
                    fontWeight: 600,
                  }}
                >
                  {copy.subtitle}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  lineHeight: 1.06,
                  letterSpacing: -1.3,
                  fontWeight: 800,
                  color: "#1b2246",
                }}
              >
                {copy.headline}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                {copy.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 999,
                      border: "1px solid rgba(79, 70, 229, 0.25)",
                      background: "rgba(79, 70, 229, 0.1)",
                      color: "#2a3170",
                      padding: "8px 14px",
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {copy.stats.map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  borderRadius: 16,
                  background: "#ffffff",
                  border: "1px solid rgba(79, 70, 229, 0.18)",
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#505aa5",
                    fontWeight: 700,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 22, color: "#202754", fontWeight: 700 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

export default function OpenGraphImage() {
  return renderOpenGraphImage("pt");
}
