import { useTreeContext } from "@/contexts/treeContexts";
import cc from "classcat";
import React, { useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import dynamic from "next/dynamic";

const NodeViewer = dynamic(() => import("./NodeViewer"), {
  ssr: false,
});

function CustomNode({ data }: { data: NodeDataType }) {
  const { setOpenedNodeIndex } = useTreeContext();

  return (
    <div
      className={cc([
        "bg-white shadow-shadow flex flex-col gap-2 rounded z-50 w-[30rem] px-6 py-4 !visible",
      ])}
      onClick={() => setOpenedNodeIndex(data.index)}
    >
      <div className={cc(["font-bold text-2xl"])}>{data.title}</div>
      <NodeViewer data={data} />
      <ul>
        {data.checklist.map((checklist, i) => (
          <li key={i} className={cc(["flex text-lg items-center"])}>
            <input type="checkbox" className="checkbox checkbox-sm mr-2" />
            {checklist.content}
          </li>
        ))}
      </ul>
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!w-4 !h-4 hover:bg-opacity-80 flex items-center justify-center rounded-full !bg-white !border-[1px] !border-black-200 shadow-shadow"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="!w-4 !h-4 hover:bg-opacity-80 flex items-center justify-center rounded-full !bg-white !border-[1px] !border-black-200 shadow-shadow"
      />
    </div>
  );
}

export default CustomNode;
