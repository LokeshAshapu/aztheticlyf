import { ImageResponse } from "next/og";

export const alt = "Aztheticlyf — Aesthetic Gift Studio. Gifts worth keeping the ribbon on.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2c1a36",
          color: "#fbf5ec",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -180,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(180,155,224,0.22)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 90,
            bottom: -220,
            width: 420,
            height: 420,
            borderRadius: 999,
            border: "1px solid rgba(251,245,236,0.18)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#b49be0", display: "flex" }} />
          <div style={{ fontSize: 20, letterSpacing: 8, textTransform: "uppercase", color: "rgba(251,245,236,0.7)" }}>
            Aesthetic Gift Studio · Chennai
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -3, maxWidth: 900, display: "flex", flexDirection: "column" }}>
            <span>Gifts worth keeping</span>
            <span>the ribbon on.</span>
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 24,
              color: "rgba(251,245,236,0.62)",
              maxWidth: 780,
              lineHeight: 1.4,
            }}
          >
            Korean stationery, curated hampers and anti-tarnish jewellery — wrapped by hand, sent
            worldwide.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(251,245,236,0.2)",
            paddingTop: 22,
            fontSize: 22,
          }}
        >
          <span style={{ letterSpacing: 2 }}>AZTHETICLYF</span>
          <span style={{ color: "#b49be0" }}>@aztheticlyf</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
