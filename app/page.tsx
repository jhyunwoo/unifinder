import Link from "next/link";
import {
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 p-4">
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <Link
          className="flex w-full max-w-lg items-center justify-center gap-2 rounded-full bg-cyan-700 p-2 px-4 text-xl font-bold text-white transition hover:bg-cyan-600 md:h-40 md:rounded-2xl"
          href="/search"
        >
          <p>대학 전형 검색</p>
          <MagnifyingGlassIcon className="size-6" />
        </Link>

        <Link
          className="flex w-full max-w-lg items-center justify-center gap-2 rounded-full bg-cyan-500 p-2 px-4 text-xl font-bold text-white transition hover:bg-cyan-400 md:h-40 md:rounded-2xl"
          href="/info"
        >
          <p>대학별 정보</p>
          <BuildingLibraryIcon className="size-6" />
        </Link>
      </div>
      <div>지원 대학: 서울대, 연세대, 고려대, 서강대</div>
      <div>
        지원 예정 대학: 성균관대, 한양대, KAIST, GIST, UNIST, DGIST, KENTEC
      </div>
      <div className="text-sm font-semibold text-red-500">
        주의: 베타버전이므로 데이터가 정확하지 않을 수 있습니다. 각 대학별
        수시모집요강을 꼭 확인하시길 바랍니다.
      </div>
    </div>
  );
}
