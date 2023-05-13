import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  OnConnectStartParams,
} from "reactflow";
import CustomNode from "./Node";
import "reactflow/dist/style.css";
import { Dispatch, SetStateAction, useCallback, useRef } from "react";

const nodeTypes = {
  custom: CustomNode,
};

let id = 100;
const getId = () => `${id++}`;

const initialNodes = [
  {
    id: "1",
    position: { x: 10, y: 10 },
    data: {
      index: "1",
      title: "asdf",
      content: "asdf",
      progress_individual: false,
      loc_x: 20,
      loc_y: 40,
      size_x: 10,
      size_y: 50,
      is_main_branch: true,
      checklists: ["asdf", "234"],
    },
    type: "custom",
  },
  {
    id: "2",
    position: { x: 40, y: 80 },
    data: {
      index: "2",
      title: "asdf",
      content: "asdf",
      progress_individual: false,
      loc_x: 20,
      loc_y: 40,
      size_x: 10,
      size_y: 50,
      is_main_branch: true,
      checklists: [
        "어둠만이 나의 전부였던 동안 숨이 벅차도록 달려왔잖아",
        "울타리 밖에 일렁이는 무언가 그 아무도 모르는 별일지 몰라",
      ],
    },
    type: "custom",
  },
  {
    id: "3",
    position: { x: 60, y: 100 },
    data: {
      index: "3",
      title: "asdf",
      content: "asdf",
      progress_individual: false,
      loc_x: 20,
      loc_y: 40,
      size_x: 10,
      size_y: 50,
      is_main_branch: false,
      checklists: [
        "어둠만이 나의 전부였던 동안 숨이 벅차도록 달려왔잖아",
        "울타리 밖에 일렁이는 무언가 그 아무도 모르는 별일지 몰라",
      ],
    },
    type: "custom",
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "top",
    targetHandle: "bottom",
    animated: true,
    style: { stroke: "#000" },
  },
];

function Flow() {
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#000" } }, eds)
      ),
    []
  );
  const { project } = useReactFlow();
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
            title: "Sample",
            content: "Sample",
            progress_individual: false,
            loc_x: event.clientX - left - 75,
            loc_y: event.clientY - top,
            size_x: 0,
            size_y: 0,
            checklists: [],
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
      console.log(
        JSON.stringify({
          id,
          source: connectingNodeId.current!,
          target: id,
          animated: true,
          style: { stroke: "#000" },
        })
      );
    },
    [project]
  );

  return (
    <div className="wrapper" ref={reactFlowWrapper}>
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
    <div className="w-full">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
