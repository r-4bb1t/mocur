import Link from "next/link";

export default function Header() {
  return (
    <header className="h-32 w-full fixed flex px-16 items-center justify-between z-50">
      <ul className="flex gap-12 items-center font-semibold text-xl">
        <li>
          <Link href={"/"}>
            <img src="/logo.svg" />
          </Link>
        </li>
        <li>
          <Link href={"/curriculum"}>
            <button className="hover:-translate-y-1 transition-all">
              커리큘럼
            </button>
          </Link>
        </li>
        <li>
          <Link href={"/study"}>
            <button className="hover:-translate-y-1 transition-all">
              스터디
            </button>
          </Link>
        </li>
      </ul>
      <div className="rounded-full w-8 h-8 bg-white"></div>
    </header>
  );
}
