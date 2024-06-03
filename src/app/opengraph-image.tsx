import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const workSansRegular = fetch(
    new URL("../assets/WorkSans-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const workSansMedium = fetch(
    new URL("../assets/WorkSans-Medium.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "32px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#FAF9F6",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          <p
            style={{
              fontSize: "48px",
              color: "#404040",
            }}
          >
            Frank Hsu
          </p>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#808080",
            }}
          >
            Full-stack Dev @ NYC
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "WorkSans",
          data: await workSansRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "WorkSans",
          data: await workSansMedium,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
