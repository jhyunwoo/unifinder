import "./globals.css";
import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import Header from "@/components/header";
import RecoilProvider from "@/components/recoil-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "유니파인더 UNIFINDER",
  description: "2025학년도 수시 지원 카드 6장 검색",
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
