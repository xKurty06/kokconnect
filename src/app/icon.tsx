import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://kuyakoks.vercel.app";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={`${baseUrl}/assets/kuya-kok-logo.png`}
          alt="Kuya Kok's logo"
          width="64"
          height="64"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
