import { ImageResponse } from "next/og";

export const alt =
  "Church Multiplication Collective — Mission to Multiply";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #293D48 0%, #23343D 52%, #151616 100%)",
          color: "#FBF0DE",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#EA9F43",
            height: 630,
            left: 0,
            position: "absolute",
            top: 0,
            width: 18,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 960,
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#EA9F43",
              display: "flex",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Church Multiplication Collective
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              lineHeight: 0.92,
              marginTop: 30,
            }}
          >
            MISSION TO
            <br />
            MULTIPLY.
          </div>
          <div
            style={{
              color: "#F1D2AC",
              display: "flex",
              fontSize: 28,
              marginTop: 34,
            }}
          >
            Make disciples. Develop leaders. Multiply churches.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
