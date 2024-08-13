import type { ReactNode } from "react";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유니파인더 | 대학 목록",
  description: "유니파인더 대학 목록",
};

export default function InfoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full p-4 pt-20">
      <Suspense>{children}</Suspense>
    </div>
  );
}
