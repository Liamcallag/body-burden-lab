import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

async function loadInterFont(): Promise<ArrayBuffer | undefined> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Inter:wght@700",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const match = css.match(/url\((.+?)\)/);
    if (match?.[1]) return fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {}
  return undefined;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Body Burden — Microplastics Exposure Calculator";
  const tag = searchParams.get("tag") ?? "Tool";
  const score = searchParams.get("score");
  const level = searchParams.get("level") ?? "Moderate";

  const badgeStyles: Record<string, { bg: string; color: string }> = {
    Low:        { bg: "#065f46", color: "#6ee7b7" },
    Moderate:   { bg: "#92400e", color: "#fcd34d" },
    High:       { bg: "#dc2626", color: "#ffffff" },
    "Very High": { bg: "#7f1d1d", color: "#fca5a5" },
  };
  const badge = badgeStyles[level] ?? badgeStyles["Moderate"];

  const fontData = await loadInterFont();
  const fonts = fontData
    ? [{ name: "Inter", data: fontData, weight: 700 as const, style: "normal" as const }]
    : [];
  const fontFamily = fontData ? "Inter" : "sans-serif";

  const formattedScore = score ? parseInt(score).toLocaleString("en-US") : null;

  if (score && formattedScore) {
    return new ImageResponse(
      (
        <div style={{ width: "1200px", height: "630px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0f5e4e", fontFamily }}>
          <div style={{ color: "#5eead4", fontSize: "16px", fontWeight: 700, letterSpacing: "3px", marginBottom: "24px", display: "flex" }}>
            MY MICROPLASTIC EXPOSURE
          </div>
          <div style={{ fontSize: "140px", fontWeight: 700, color: "#ffffff", lineHeight: "1", display: "flex" }}>
            {formattedScore}
          </div>
          <div style={{ fontSize: "30px", color: "#99f6e4", fontWeight: 400, marginTop: "16px", marginBottom: "32px", display: "flex" }}>
            microplastic particles per week
          </div>
          <div style={{ display: "flex", backgroundColor: badge.bg, borderRadius: "50px", paddingTop: "12px", paddingBottom: "12px", paddingLeft: "32px", paddingRight: "32px", marginBottom: "36px" }}>
            <div style={{ color: badge.color, fontSize: "18px", fontWeight: 700, letterSpacing: "2px", display: "flex" }}>
              {level.toUpperCase()} EXPOSURE
            </div>
          </div>
          <div style={{ color: "#5eead4", fontSize: "18px", fontWeight: 400, display: "flex" }}>
            bodyburdenlab.com
          </div>
        </div>
      ),
      { width: 1200, height: 630, fonts }
    );
  }

  return new ImageResponse(
    (
      <div style={{ width: "1200px", height: "630px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0f5e4e", fontFamily }}>
        <div style={{ color: "#5eead4", fontSize: "16px", fontWeight: 700, letterSpacing: "3px", marginBottom: "32px", display: "flex" }}>
          {tag.toUpperCase()}
        </div>
        <div style={{ fontSize: title.length > 50 ? "52px" : "64px", fontWeight: 700, color: "#ffffff", lineHeight: "1.15", maxWidth: "900px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "48px" }}>
          {title}
        </div>
        <div style={{ color: "#5eead4", fontSize: "20px", fontWeight: 400, display: "flex" }}>
          bodyburdenlab.com
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts }
  );
}
