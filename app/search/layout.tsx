import type { ReactNode } from 'react'
import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '내수6 | 전형 검색',
  description: '내 수시카드 6장 수시 전형 검색',
}

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full p-4 pt-20">
      <Suspense>{children}</Suspense>
    </div>
  )
}
