import type { ReactNode } from 'react'

export default function InfoTitle({ children }: { children: ReactNode }) {
  return <div className="p-2 text-2xl font-bold">{children}</div>
}
