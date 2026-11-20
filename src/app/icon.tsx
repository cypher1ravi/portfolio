import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2a2826",
          borderRadius: 16,
          color: "#f6f0e4",
          fontSize: 38,
          fontWeight: 800,
        }}
      >
        R<span style={{ color: "#e8590c" }}>.</span>
      </div>
    ),
    size,
  );
}
