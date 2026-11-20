import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f0e4",
          padding: 80,
          color: "#2a2826",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "#e8590c",
          }}
        />
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
          Ravindra<span style={{ color: "#e8590c" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 44, marginTop: 24, color: "#e8590c", fontWeight: 700 }}>{site.role}</div>
          <div style={{ fontSize: 28, marginTop: 20, color: "#6b655d" }}>
            React · Node.js · Express · MongoDB · Tailwind CSS
          </div>
        </div>
      </div>
    ),
    size,
  );
}
