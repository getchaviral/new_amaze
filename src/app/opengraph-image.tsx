import { ImageResponse } from "next/og";

export const alt = "Amaze Expo — AI exhibition booth design and build";
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
          backgroundColor: "#111827",
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(212,160,55,0.08) 0 1px, transparent 1px 16px)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#B22234",
              color: "#FFFFFF",
              fontSize: "34px",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            A
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 800, letterSpacing: "6px" }}>
            AMAZE EXPO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ color: "#D4A037", fontSize: "24px", fontWeight: 700, letterSpacing: "5px" }}>
            YOUR AI EXHIBITION TEAM
          </div>
          <div
            style={{
              color: "#F9FAFB",
              fontSize: "66px",
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: "960px",
            }}
          >
            Design a booth in minutes. We build it.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#D1D5DB", fontSize: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "999px", backgroundColor: "#D4A037" }} />
            850+ booths built
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "999px", backgroundColor: "#D4A037" }} />
            20+ years of experience
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "999px", backgroundColor: "#D4A037" }} />
            Hyderabad · New Delhi · Bengaluru
          </div>
        </div>
      </div>
    ),
    size,
  );
}
