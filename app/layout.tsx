import "./globals.css";
import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import Header from "@/components/header";
import RecoilProvider from "@/components/recoil-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "유니파인더 UNIFINDER",
  description: "2025학년도 대학교 입시 대비 수시 지원 카드 검색",
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
