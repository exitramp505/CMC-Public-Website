import { ImageResponse } from "next/og";

export const alt =
  "Church Multiplication Collective — Open Bible";
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
            background:
              "linear-gradient(90deg, #EA9F43 0%, #4DA79C 100%)",
            height: 12,
            left: 72,
            position: "absolute",
            top: 66,
            width: 170,
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: 72,
            maxWidth: 1056,
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#FBF0DE",
              borderRadius: 56,
              display: "flex",
              height: 252,
              justifyContent: "center",
              position: "relative",
              width: 252,
            }}
          >
            <div
              style={{
                border: "16px solid #293D48",
                borderRadius: 34,
                display: "flex",
                height: 188,
                position: "absolute",
                width: 188,
              }}
            />
            <div
              style={{
                background: "#293D48",
                borderRadius: 12,
                display: "flex",
                height: 128,
                position: "absolute",
                transform: "rotate(45deg)",
                width: 28,
              }}
            />
            <div
              style={{
                background: "#293D48",
                borderRadius: 12,
                display: "flex",
                height: 128,
                position: "absolute",
                transform: "rotate(-45deg)",
                width: 28,
              }}
            />
            {[
              { left: 118, top: 39 },
              { left: 118, top: 197 },
              { left: 39, top: 118 },
              { left: 197, top: 118 },
            ].map((position) => (
              <div
                key={`${position.left}-${position.top}`}
                style={{
                  background: "#EA9F43",
                  display: "flex",
                  height: 16,
                  left: position.left,
                  position: "absolute",
                  top: position.top,
                  transform: "rotate(45deg)",
                  width: 16,
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: "#EA9F43",
                display: "flex",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              An Open Bible ministry
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                fontWeight: 900,
                letterSpacing: "-0.045em",
                lineHeight: 0.94,
                marginTop: 24,
              }}
            >
              <span>Church Multiplication</span>
              <span>Collective</span>
            </div>
            <div
              style={{
                color: "#F1D2AC",
                display: "flex",
                fontSize: 27,
                lineHeight: 1.35,
                marginTop: 30,
              }}
            >
              Helping pioneers, pastors, and churches take faithful next steps.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
