import { ImageResponse } from "next/og";

export const dynamic = 'force-static'

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Brand mark favicon — KH on pink→gold gradient */
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
          borderRadius: "50%",
          background: "linear-gradient(135deg, #e89ba8 0%, #c9a06b 100%)",
          color: "white",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        KH
      </div>
    ),
    { ...size }
  );
}
