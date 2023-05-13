import CurLists from "@/components/CurLists";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import StudyList from "@/components/StudyList";
import Link from "next/link";
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
      <main className="flex flex-col items-center pt-48">
        <div className="font-black text-2xl mb-4">스터디 찾기</div>
        <Input search={search} setSearch={setSearch} />
        <div className="flex mt-2 py-2 gap-2">
          {chipData.map((chip, i) => (
            <button
              key={i}
              className="rounded-full py-2 px-4 shadow-shadow text-sm font-semibold bg-white hover:-translate-y-1 transition-transform"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="w-4/5 max-w-7xl mt-8 mb-12">
          <StudyList />
        </div>
      </main>
    </Layout>
  );
}
