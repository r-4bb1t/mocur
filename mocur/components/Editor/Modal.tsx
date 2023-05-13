import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import cc from "classcat";
import { useTreeContext } from "@/contexts/treeContexts";
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon } from "../Icons";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

export default function Drawer() {
  const { nodes, openedNodeIndex, setNodes, setOpenedNodeIndex } =
    useTreeContext();
  const [data, setData] = useState<NodeDataType | null>(null);

  const editorRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(openedNodeIndex);
    const filtered = nodes.filter((node) => node.id === openedNodeIndex);
    if (filtered.length > 0) {
      setData(filtered[0].data);
      editorRef.current?.getInstance().setHTML(filtered[0].data.content || "");
      if (titleRef.current)
        titleRef.current.value = filtered[0].data.title || "";
    } else setData(null);
  }, [nodes, openedNodeIndex]);

  /* const getData = useCallback(async () => {
    const res = (await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/`)).data;
  }, []);  */

  return (
    <motion.div
      className="w-1/2 h-3/4 flex flex-col bg-white gap-2 p-4 rounded-lg shadow-shadow"
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className="w-full flex flex-col gap-2">
        <input
          placeholder="title"
          className="input input-bordered w-full"
          defaultValue={data?.title}
          ref={titleRef}
          onChange={(e) =>
            setData((data) => {
              if (!data) return null;
              return { ...data, title: e.target.value };
            })
          }
        />
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          initialValue="."
          height="300px"
          minHeight="300px"
          initialEditType="markdown"
          useCommandShortcut={true}
          onChange={() => {
            setData((data) => {
              if (!data) return null;
              return {
                ...data,
                content: editorRef.current?.getInstance().getHTML() || "",
              };
            });
          }}
        />
      </div>
      <div className="h-full overflow-y-auto">
        <ul>
          {data?.checklists.map((checklist, i) => (
            <li
              key={checklist.id}
              className={cc([
                "flex border-b-[1px] border-b-black-200 py-2 items-center",
                /* data.is_main_branch && "text-lg",
                !data.is_main_branch && "text-base", */
              ])}
            >
              <input
                type="checkbox"
                checked={false}
                readOnly
                className="checkbox checkbox-sm mr-2"
              />
              <input
                defaultValue={checklist.content}
                className="input w-full input-bordered input-sm"
                onChange={(e) =>
                  setData((data) => {
                    if (!data) return null;
                    return {
                      ...data,
                      checklists: data.checklists.map((item) => {
                        if (item.id === checklist.id)
                          return { ...item, content: e.target.value };
                        return item;
                      }),
                    };
                  })
                }
              />
              <button
                onClick={() =>
                  setData((data) => {
                    if (!data) return null;
                    return {
                      ...data,
                      checklists: data.checklists.filter(
                        (item) => item.id !== checklist.id
                      ),
                    };
                  })
                }
              >
                <CloseIcon
                  color="#777"
                  className="hover:scale-90 transition-all"
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center py-3">
          <button
            className="shadow-shadow w-8 h-8 rounded-full hov flex items-center justify-center"
            onClick={() =>
              setData((data) => {
                if (!data) return null;
                return {
                  ...data,
                  checklists: [
                    ...(data?.checklists || []),
                    { content: "sample", id: nanoid() },
                  ],
                };
              })
            }
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="py-2 px-3 rounded hov bg-main text-white flex items-center gap-2 font-bold"
          onClick={() => {
            setNodes((nodes) =>
              nodes.map((node) => {
                if (node.id === openedNodeIndex) return { ...node, data: data };
                return node;
              })
            );
            setOpenedNodeIndex("");
          }}
        >
          <CheckIcon />
          수정
        </button>
        <button
          className="py-2 px-3 rounded hov bg-red-400 text-white flex items-center gap-2 font-bold disabled:bg-black-500"
          disabled={nodes.length === 1}
          onClick={() => {
            setNodes((nodes) =>
              nodes.filter((node) => node.id !== openedNodeIndex)
            );
            setOpenedNodeIndex("");
          }}
        >
          <DeleteIcon />
          삭제
        </button>
      </div>
    </motion.div>
  );
}
