import Link from 'next/link'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <div className="fixed top-0 flex w-full justify-start gap-2 bg-slate-50/50 p-4 backdrop-blur">
      <Link className="flex items-center" href="/">
        <BuildingLibraryIcon className="size-10" />
        <div className="text-2xl font-bold">내 수시카드 6장</div>
      </Link>
    </div>
  )
}
