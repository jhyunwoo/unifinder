import "./globals.css";
import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import Header from "@/components/header";
import RecoilProvider from "@/components/recoil-provider";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title:
    "유니파인더 UNIFINDER | 내가 지원할 수 있는 전형만 검색할 수 있는 수시카드 검색",
  description:
    "내가 지원할 수 있는 전형만 검색할 수 있는 수시카드 검색 서비스. 서울대, 연세대, 고려대, 서강대 수시 전형 지원",
  metadataBase: new URL(
    process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html className="bg-neutral-50" lang="ko">
      <GoogleAnalytics gaId="G-2TS8FF30SS" />
      <body>
        <div className="mx-auto w-full max-w-6xl">
          <Header />
          <RecoilProvider>{children}</RecoilProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
