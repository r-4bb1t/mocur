export default function Header() {
  return (
    <header className="h-32 w-full fixed flex px-16 items-center justify-between">
      <ul className="flex gap-12 items-center font-semibold text-xl">
        <li>
          <img src="/logo.svg" />
        </li>
        <li>
          <a>커리큘럼</a>
        </li>
        <li>
          <a>스터디</a>
        </li>
      </ul>
      <div className="rounded-full w-8 h-8 bg-white"></div>
    </header>
  );
}
