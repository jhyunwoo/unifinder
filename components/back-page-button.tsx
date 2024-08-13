import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BackPageButton({
  href,
  name,
}: {
  href: string
  name: string
}) {
  return (
    <Link
      className="group flex w-auto items-center text-neutral-700"
      href={href}
    >
      <ChevronLeftIcon className="size-6" />
      <p className="text-wrap text-lg group-hover:underline">{name}</p>
    </Link>
  )
}
