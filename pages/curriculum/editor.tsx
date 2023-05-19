import Editior from "@/components/Editor";
import Sidebar from "@/components/Editor/Sidebar";
import Layout from "@/components/Layout";
import { useTreeContext } from "@/contexts/treeContexts";
import { useState } from "react";
import dynamic from "next/dynamic";
import cc from "classcat";
import { AnimatePresence, motion } from "framer-motion";

const Modal = dynamic(() => import("@/components/Editor/Modal"), {
  ssr: false,
});

export default function Home() {
  const { openedNodeIndex, setOpenedNodeIndex } = useTreeContext();
  return (
    <Layout>
      <main className="w-screen h-screen flex overflow-hidden">
        <div className="absolute inset-0 pt-32 flex overflow-hidden">
          <Sidebar />
          <Editior />
        </div>
        <AnimatePresence>
          {openedNodeIndex && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black bg-opacity-25 fixed inset-0 z-50 flex items-center justify-center"
              onClick={(e) => {
                setOpenedNodeIndex("");
              }}
            >
              <Modal />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Layout>
  );
}
