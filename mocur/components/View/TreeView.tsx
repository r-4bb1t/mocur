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
        edges={edges}
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
