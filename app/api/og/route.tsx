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
  const levelBg =
    level === "Low" ? "rgba(52,211,153,0.15)" : level === "High" ? "rgba(248,113,113,0.15)" : "rgba(251,191,36,0.15)";

  const formattedScore = score
    ? parseInt(score).toLocaleString("en-US")
    : null;

  return new ImageResponse(
    score ? (
      // Personalised score card
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a1628",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Teal top bar */}
        <div style={{ height: "6px", background: "linear-gradient(to right, #0f766e, #14b8a6)", width: "100%" }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px 48px",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                color: "#14b8a6",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              My Microplastic Exposure
            </div>
            <div
              style={{
                backgroundColor: levelBg,
                color: levelColor,
                fontSize: "13px",
                fontWeight: 700,
                padding: "5px 14px",
                borderRadius: "999px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: `1px solid ${levelColor}40`,
              }}
            >
              {level} exposure
            </div>
          </div>

          {/* Score */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div
              style={{
                fontSize: "110px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {formattedScore}
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#94a3b8",
                fontWeight: 400,
                marginTop: "12px",
              }}
            >
              microplastic particles per week
            </div>
          </div>

          {/* Bottom row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0f766e, #14b8a6)",
                }}
              />
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                Body Burden Lab
              </div>
            </div>
            <div style={{ fontSize: "17px", color: "#475569" }}>
              Find out yours at bodyburdenlab.com →
            </div>
          </div>
        </div>
      </div>
    ) : (
      // Generic tool card
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
        {/* Teal top bar */}
        <div style={{ height: "6px", background: "linear-gradient(to right, #0f766e, #14b8a6)", width: "100%" }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px 48px",
          }}
        >
          {/* Tag pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "rgba(20,184,166,0.15)",
              color: "#14b8a6",
              fontSize: "13px",
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: "999px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "1px solid rgba(20,184,166,0.3)",
              width: "fit-content",
            }}
          >
            {tag}
          </div>

          {/* Title */}
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

          {/* Footer row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0f766e, #14b8a6)",
                }}
              />
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                Body Burden Lab
              </div>
            </div>
            <div style={{ fontSize: "17px", color: "#475569" }}>
              bodyburdenlab.com
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
