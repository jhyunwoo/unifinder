import { Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <Cog6ToothIcon className="size-16 animate-spin text-neutral-600" />
    </div>
  )
}
