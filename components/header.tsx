import Link from "next/link";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="fixed top-0 flex w-full justify-start gap-2 bg-slate-50/50 p-4 backdrop-blur">
      <Link className="flex items-center gap-2" href="/">
        <BuildingLibraryIcon className="size-10 text-cyan-800" />
        <div className="text-2xl font-bold">
          유니파인더 <span className={"text-sm"}>Beta</span>
        </div>
      </Link>
    </div>
  );
}
