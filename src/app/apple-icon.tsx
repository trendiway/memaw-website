import { ImageResponse } from "next/og";

export const dynamic = 'force-static'

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — KH brand mark */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "linear-gradient(135deg, #e89ba8 0%, #c9a06b 100%)",
          color: "white",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        KH
      </div>
    ),
    { ...size }
  );
}
