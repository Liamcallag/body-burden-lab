import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Body Burden — Microplastics Exposure Calculator";
  const tag = searchParams.get("tag") ?? "Tool";
  const score = searchParams.get("score");
  const level = searchParams.get("level") ?? "Moderate";

  const levelColor =
    level === "Low" ? "#34d399" : level === "High" ? "#f87171" : "#fbbf24";

  const formattedScore = score ? parseInt(score).toLocaleString("en-US") : null;

  if (score && formattedScore) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0a1628",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ height: "6px", backgroundColor: "#0f766e", width: "100%" }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 80px 48px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ color: "#14b8a6", fontSize: "13px", fontWeight: 700 }}>
                MY MICROPLASTIC EXPOSURE
              </div>
              <div style={{ color: levelColor, fontSize: "13px", fontWeight: 700 }}>
                {level.toUpperCase()} EXPOSURE
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "110px", fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>
                {formattedScore}
              </div>
              <div style={{ fontSize: "28px", color: "#94a3b8", fontWeight: 400, marginTop: "12px" }}>
                microplastic particles per week
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#0f766e" }} />
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>Body Burden Lab</div>
              </div>
              <div style={{ fontSize: "17px", color: "#475569" }}>Find out yours at bodyburdenlab.com</div>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a1628",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ height: "6px", backgroundColor: "#0f766e", width: "100%" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px 48px",
          }}
        >
          <div style={{ color: "#14b8a6", fontSize: "13px", fontWeight: 700 }}>
            {tag.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: title.length > 50 ? "52px" : "62px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#0f766e" }} />
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>Body Burden Lab</div>
            </div>
            <div style={{ fontSize: "17px", color: "#475569" }}>bodyburdenlab.com</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
