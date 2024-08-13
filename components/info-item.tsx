import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function InfoItem({
  href,
  name,
  symbolImage,
  children,
}: {
  href: string
  name: string | null
  symbolImage: string | null
  children: ReactNode
}) {
  return (
    <Link
      className="flex items-center gap-2 rounded-lg bg-white p-2 transition lg:hover:shadow-xl"
      href={href}
    >
      {symbolImage ? (
        <Image
          alt={name ? name : 'Image'}
          height={50}
          src={symbolImage}
          width={50}
        />
      ) : (
        <div />
      )}
      {children}
    </Link>
  )
}
