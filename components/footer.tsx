import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-neutral-100 p-4">
      <div className="mx-auto w-full max-w-6xl text-neutral-700 text-sm">
        Copyright 2024.{" "}
        <Link
          className="hover:underline"
          href="https://www.moveto.kr"
          target="_blank"
        >
          Moveto Team
        </Link>
        . all rights reserved.
      </div>
    </div>
  );
}
