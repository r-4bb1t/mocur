import Editior from "@/components/Editor";
import Drawer from "@/components/Editor/Drawer";
import Sidebar from "@/components/Editor/Sidebar";
import Layout from "@/components/Layout";
import { useDrawerContext } from "@/contexts/drawerContexts";
import { useState } from "react";

export default function Home() {
  const { openedNodeIndex, setOpenedNodeIndex } = useDrawerContext();
  return (
    <Layout>
      <main className="w-full h-screen flex">
        <div className="drawer drawer-end">
          <input
            id="isDrawerOpened"
            type="checkbox"
            className="drawer-toggle"
            checked={openedNodeIndex.length > 0}
            onChange={(v) => !v.target.checked && setOpenedNodeIndex("")}
          />
          <div className="drawer-content pt-32 flex">
            <Sidebar />
            <Editior />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="isDrawerOpened"
              className="drawer-overlay ![--tw-bg-opacity:0.1]"
            ></label>
            <div className="menu p-4 w-1/3 bg-white text-base-content mt-32 rounded-tl-lg shadow-shadow">
              <Drawer />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
