import CurLists from "@/components/CurLists";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";

const chipData = ["웹", "프론트엔드", "백엔드", "집안일", "리액트", "운영체제"];

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <Layout>
      <main className="flex flex-col items-center pt-16">
        <div className="w-full py-48 -mb-20 flex justify-center bg-[url(/hero.svg)] bg-no-repeat bg-right bg-contain">
          <div className="w-2/3">
            <h1 className="text-5xl font-black">모두의 커리큘럼, 모커!</h1>
            <p className="mt-6 mb-3 text-lg">
              함께 공부하고, 함께 성장하는 모두의 지식 가이드
            </p>
            <Link href={"/curriculum/editor"}>
              <button className="btn btn-md btn-ghost bg-white">
                커리큘럼 만들기
              </button>
            </Link>
          </div>
        </div>
        <div className="font-black text-2xl mb-4">커리큘럼 찾기</div>
        <Input search={search} setSearch={setSearch} />
        <div className="flex mt-2 py-2 gap-2">
          {chipData.map((chip, i) => (
            <button
              key={i}
              className="rounded-full py-2 px-4 shadow-shadow text-sm font-semibold bg-white hover:-translate-y-1 transition-transform"
              onClick={() => setSearch(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="w-4/5 max-w-7xl mt-8 mb-12">
          <CurLists search={search} />
        </div>
      </main>
    </Layout>
  );
}
