import Sidebar from "@/components/Editor/Sidebar";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError, isAxiosError } from "axios";
import Error from "next/error";
import TreeView from "@/components/View/TreeView";

const facNodes = (nodes: GetTreeResponseType["nodes"]) => {
  return nodes.map((node) => {
    return {
      id: node.index,
      position: {
        x: node.loc_x,
        y: node.loc_y,
      },
      type: "custom",
      data: {
        index: node.index,
        title: node.title,
        checklists: node.checklist,
      } as NodeDataType,
    };
  });
};

export default function View() {
  const [data, setData] = useState<GetTreeResponseType | null>(null);
  const [err, setErr] = useState("");

  const router = useRouter();
  const getData = useCallback(async () => {
    try {
      const res = (
        await axios.get(
          `${process.env.NEXT_PUBLIC_API_HOST}/trees/${router.query.id}`
        )
      ).data as GetTreeResponseType;
      setData(res);
    } catch (e) {
      console.log(e);
      setErr("에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }, [router.query.id]);

  useEffect(() => {
    if (router.query.id) getData();
  }, [router.query.id]);
  return (
    <Layout>
      <main className="w-screen h-screen flex overflow-hidden">
        {err && (
          <div className="w-full h-full flex flex-col items-center justify-center font-bold text-lg">
            <img src="/error.svg" />
            {err}
          </div>
        )}
        {data && (
          <div className="absolute inset-0 pt-32 flex overflow-hidden">
            <Sidebar edit={false} data={data} />
          </div>
        )}
        {data && <TreeView nodes={facNodes(data.nodes)} edges={data.edges} />}
      </main>
    </Layout>
  );
}
