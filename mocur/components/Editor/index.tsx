import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  addEdge,
  Connection,
  OnConnectStartParams,
} from "reactflow";
import CustomNode from "./Node";
import "reactflow/dist/style.css";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useTreeContext } from "@/contexts/treeContexts";
import { getSampleContents } from "@/utils/getSampleContents";
import { nanoid } from "nanoid";

const nodeTypes = {
  custom: CustomNode,
};

let id = 100;
const getId = () => `${id++}`;

function Flow() {
  const {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    setLists,
    reset,
  } = useTreeContext();
  const { project } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            id: nanoid(),
            animated: true,
            style: { stroke: "#000" },
          },
          eds
        )
      ),
    []
  );
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const connectingNodeId = useRef<string | null>(null);

  const onConnectStart = useCallback(
    (_: any, { nodeId }: OnConnectStartParams) => {
      connectingNodeId.current = nodeId;
    },
    []
  );

  const onConnectEnd = useCallback(
    (event: MouseEvent | TouchEvent | any) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = reactFlowWrapper.current!.getBoundingClientRect();
        const id = getId();
        const sampleContents = getSampleContents();
        const newNode = {
          id,
          // we are removing the half of the node width (75) to center the new node
          position: project({
            x: event.clientX - left - 75,
            y: event.clientY - top,
          }),
          type: "custom",
          data: {
            index: id,
            title: sampleContents.title,
            content: sampleContents.content,
            progress_individual: false,
            loc_x: event.clientX - left - 75,
            loc_y: event.clientY - top,
            checklist: sampleContents.checklist,
            is_main_branch: true,
          },
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          addEdge(
            {
              id,
              source: connectingNodeId.current!,
              target: id,
              animated: true,
              style: { stroke: "#000" },
            },
            eds
          )
        );
      }
    },
    [project]
  );

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="wrapper w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        className="!overflow-visible"
      />
    </div>
  );
}

export default function Editior() {
  return (
    <div className="w-full shrink-0">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
