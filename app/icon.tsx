import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          background: "#172c26",
          color: "#a7e3ca",
          fontSize: 35,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        JS
      </div>
    ),
    size,
  );
}
