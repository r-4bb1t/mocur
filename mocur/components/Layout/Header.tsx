import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Auth } from "../Auth";
import { useSession } from "next-auth/react";

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <header className="h-32 w-full fixed flex px-16 items-center justify-between z-50">
        <ul className="flex gap-12 items-center font-bold text-xl">
          <li>
            <Link href={"/"}>
              <img src="/logo.svg" />
            </Link>
          </li>
          <li>
            <Link href={"/curriculum/editor"}>
              <button className="hover:-translate-y-1 transition-all">
                커리큘럼 만들기
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/study"}>
              <button className="hover:-translate-y-1 transition-all">
                스터디 찾기
              </button>
            </Link>
          </li>
        </ul>
        {session ? (
          <div className="rounded-full w-10 h-10 shadow-shadow bg-white overflow-hidden">
            {" "}
            <img
              className="object-cover"
              src={session.user?.image || "/white.png"}
            />
          </div>
        ) : (
          <button
            onClick={() => setIsAuthOpen(true)}
            className="btn btn-ghost bg-white"
          >
            가입 / 로그인
          </button>
        )}
      </header>
      <AnimatePresence>
        {isAuthOpen && (
          <div
            className="fixed inset-0 bg-black text-black bg-opacity-30 p-5 flex items-center justify-center z-[100]"
            onClick={(e) => {
              e.preventDefault();
              setIsAuthOpen(false);
            }}
          >
            <motion.div
              className="w-full max-w-xs card bg-white"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0, transition: { duration: 0.2 } }}
            >
              <Auth close={() => setIsAuthOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
