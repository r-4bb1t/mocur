import CurLists from "@/components/CurLists";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useState } from "react";

const chipData = [
  "Web",
  "Frontend",
  "Backend",
  "React",
  "Django",
  "AI",
  "Javascript",
];

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <Layout>
      <main className="flex flex-col items-center pt-16">
        <div className="w-full py-48 -mb-16 flex justify-center bg-[url(/hero.svg)] bg-no-repeat bg-right bg-contain">
          <div className="w-2/3">
            <h1 className="text-5xl font-black">모두의 커리큘럼, 모커!</h1>
            <p className="py-6">어쩌고자짜고</p>
          </div>
        </div>
        <div className="font-black text-2xl mb-4">커리큘럼 찾기</div>
        <Input search={search} setSearch={setSearch} />
        <div className="flex mt-2 py-2 gap-2">
          {chipData.map((chip, i) => (
            <button
              key={i}
              className="rounded-full py-2 px-4 shadow-shadow text-sm font-semibold bg-white hov"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="w-4/5 max-w-7xl mt-8 mb-12">
          <CurLists />
        </div>
      </main>
    </Layout>
  );
}
