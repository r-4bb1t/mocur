import {
  Edge,
  Node,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import CustomNode from "../Editor/Node";
import "reactflow/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};

const Flow = ({
  nodes,
  edges,
}: {
  nodes: Node<any, string | undefined>[];
  edges: Edge<any>[] | undefined;
}) => {
  const reactFlowInstance = useReactFlow();

  return (
    <div className="wrapper w-full">
      <ReactFlow
        nodes={nodes}
        edges={[
          {
            id: "1",
            source: "1",
            target: "2",
            animated: true,
            style: { stroke: "#000" },
          },
          {
            id: "2",
            source: "1",
            target: "2",
            animated: true,
            style: { stroke: "#000" },
          },
          {
            id: "3",
            source: "1",
            target: "3",
            animated: true,
            style: { stroke: "#000" },
          },
          {
            id: "4",
            source: "2",
            target: "4",
            animated: true,
            style: { stroke: "#000" },
          },
        ]}
        nodeTypes={nodeTypes}
        fitView
        className="!overflow-visible"
      />
    </div>
  );
};

export default function TreeView({
  nodes,
  edges,
}: {
  nodes: Node<any, string | undefined>[];
  edges: Edge<any>[] | undefined;
}) {
  return (
    <div className="w-full shrink-0">
      <ReactFlowProvider>
        <Flow nodes={nodes} edges={edges} />
      </ReactFlowProvider>
    </div>
  );
}
