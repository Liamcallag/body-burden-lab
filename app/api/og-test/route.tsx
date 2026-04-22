import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a1628",
        }}
      >
        <div style={{ fontSize: "60px", color: "#ffffff", fontWeight: 800 }}>
          Test Image
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
