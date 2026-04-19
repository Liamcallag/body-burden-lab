import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Body Burden";
  const tag = searchParams.get("tag") ?? "Science";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Teal top bar */}
        <div style={{ height: "8px", backgroundColor: "#0f766e", width: "100%" }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px 56px",
          }}
        >
          {/* Tag pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdfa",
                color: "#0f766e",
                fontSize: "16px",
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "999px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1px solid #ccfbf1",
              }}
            >
              {tag}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? "52px" : "62px",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Footer row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Logo dot */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#0f766e",
                }}
              />
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                Body Burden
              </div>
            </div>
            <div style={{ fontSize: "18px", color: "#94a3b8" }}>
              bodyburdenlab.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
