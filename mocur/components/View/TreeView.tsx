import { Edge, Node, ReactFlow, ReactFlowProvider } from "reactflow";

const Flow = ({
  nodes,
  edges,
}: {
  nodes: Node<any, string | undefined>[];
  edges: Edge<any>[] | undefined;
}) => {
  return (
    <div className="wrapper w-full">
      <ReactFlow nodes={nodes} edges={edges} />
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
