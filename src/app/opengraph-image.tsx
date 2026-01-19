import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pittaya UI - Components that scale with your ideas";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(249, 87, 108, 0.25), rgba(0, 0, 0, 0) 70%)",
          position: "relative",
        }}
      >
        {/* Animated beam lines effect - simulated with diagonal gradients */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            right: "-50%",
            bottom: "-50%",
            backgroundImage: `
              linear-gradient(136deg, transparent 0%, transparent 8%, rgba(255, 99, 126, 0.15) 8%, rgba(255, 99, 126, 0.15) 8.3%, transparent 8.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 15%, rgba(255, 99, 126, 0.12) 15%, rgba(255, 99, 126, 0.12) 15.3%, transparent 15.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 23%, rgba(255, 99, 126, 0.18) 23%, rgba(255, 99, 126, 0.18) 23.3%, transparent 23.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 31%, rgba(255, 99, 126, 0.1) 31%, rgba(255, 99, 126, 0.1) 31.3%, transparent 31.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 45%, rgba(255, 99, 126, 0.2) 45%, rgba(255, 99, 126, 0.2) 45.3%, transparent 45.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 54%, rgba(255, 99, 126, 0.14) 54%, rgba(255, 99, 126, 0.14) 54.3%, transparent 54.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 62%, rgba(255, 99, 126, 0.16) 62%, rgba(255, 99, 126, 0.16) 62.3%, transparent 62.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 70%, rgba(255, 99, 126, 0.11) 70%, rgba(255, 99, 126, 0.11) 70.3%, transparent 70.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 77%, rgba(255, 99, 126, 0.19) 77%, rgba(255, 99, 126, 0.19) 77.3%, transparent 77.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 85%, rgba(255, 99, 126, 0.13) 85%, rgba(255, 99, 126, 0.13) 85.3%, transparent 85.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 91%, rgba(255, 99, 126, 0.17) 91%, rgba(255, 99, 126, 0.17) 91.3%, transparent 91.3%, transparent 100%),
              linear-gradient(136deg, transparent 0%, transparent 96%, rgba(255, 99, 126, 0.12) 96%, rgba(255, 99, 126, 0.12) 96.3%, transparent 96.3%, transparent 100%)
            `,
            opacity: 0.7,
          }}
        />

        {/* Gradient overlay for depth */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 25% 40%, rgba(215, 65, 95, 0.12), transparent 40%), radial-gradient(circle at 75% 60%, rgba(185, 43, 68, 0.1), transparent 40%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
            position: "relative",
            padding: "0 60px",
            maxWidth: "1100px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 18px",
              borderRadius: "100px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              marginBottom: "28px",
              fontSize: 15,
              color: "rgba(255, 255, 255, 0.95)",
              fontWeight: 500,
            }}
          >
            <span style={{ fontSize: 17 }}>🎉</span>
            <div
              style={{
                width: "1px",
                height: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <span>Introducing Pittaya UI</span>
          </div>

          {/* Main Title - matching hero.tsx typography */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
              maxWidth: "880px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Components that scale</span>
            <span style={{ display: "flex", justifyContent: "center" }}>
              with your{" "}
              <span style={{ fontWeight: 600, marginLeft: "14px" }}>
                ideas.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.88)",
              lineHeight: 1.6,
              maxWidth: "720px",
              marginBottom: "36px",
            }}
          >
            A fully open-source UI library for React, powered by TypeScript and
            Tailwind CSS. Fast, composable, and ready for production.
          </p>

          {/* Buttons - matching hero.tsx button styles */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "12px 28px",
                borderRadius: "6px",
                backgroundColor: "white",
                color: "black",
                fontSize: 16,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
              }}
            >
              View Components
            </div>
            <div
              style={{
                padding: "12px 28px",
                borderRadius: "6px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "white",
                fontSize: 16,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
              }}
            >
              CLI Documentation
            </div>
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.4)",
            letterSpacing: "0.01em",
          }}
        >
          ui.pittaya.org
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
