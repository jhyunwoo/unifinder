import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "대학교 대학 정보";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function UniversityImage({
  params,
}: {
  params: Promise<{ universityName: string; collegeName: string }>;
}) {
  const { universityName, collegeName } = await params;
  const squareRoundB = fetch(
    new URL("./../../NanumSquareOTF_acB.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const universityData = await fetch(
    `${process.env.SITE_URL}/api/university?universityName=${universityName}`,
  ).then((res) => res.json());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="bg-white flex flex-col w-full h-full items-center justify-center">
        <div tw={"flex items-center pt-48"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="150"
            src={`${process.env.SITE_URL}${universityData.symbolImage}`}
            alt={decodeURIComponent(universityName)}
          />
          <div tw={"flex ml-8 items-center"}>
            <div tw="text-6xl font-bold">
              {decodeURIComponent(universityName)}
            </div>
            <div tw="text-6xl font-bold ml-4">
              {decodeURIComponent(collegeName)}
            </div>
          </div>
        </div>
        <div tw={"flex items-center ml-auto px-48 pt-24"}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_2)">
              <path
                d="M512 896V544M672 896V544M352 896V544M128 384L512 128L896 384M832 896V440.832C726.14 424.258 619.15 415.956 512 416C403.157 416 296.277 424.533 192 440.832V896M128 896H896M512 288H512.341V288.341H512V288Z"
                stroke="#06B6D4"
                stroke-width="60"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_2">
                <rect width="1024" height="1024" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div tw={"text-3xl font-bold ml-2"}>유니파인더 UNIFINDER</div>
        </div>
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "SquareRound",
          data: await squareRoundB,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
