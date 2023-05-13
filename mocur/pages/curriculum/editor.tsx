import Editior from "@/components/Editor";
import Sidebar from "@/components/Editor/Sidebar";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <Layout>
      <main className="w-full h-screen flex">
        <div className="drawer drawer-end">
          <input
            id="isDrawerOpened"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content pt-32">
            <Sidebar />
            <Editior />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="isDrawerOpened"
              className="drawer-overlay ![--tw-bg-opacity:0.1]"
            ></label>
            <ul className="menu p-4 w-1/3 bg-white text-base-content mt-32 rounded-tl-lg shadow-shadow">
              Sidebar content here
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
