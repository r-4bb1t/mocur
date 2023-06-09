import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Edge,
  Node,
  NodeChange,
  OnEdgesChange,
  OnNodesChange,
  useEdgesState,
  useNodesState,
} from "reactflow";

interface TreeContextProps {
  openedNodeIndex: string;
  setOpenedNodeIndex: Dispatch<SetStateAction<string>>;
  nodes: Node<any, string | undefined>[];
  setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>;
  onNodesChange: OnNodesChange;
  edges: Edge<any>[];
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
  onEdgesChange: OnEdgesChange;
  lists: ListItem[];
  setLists: Dispatch<SetStateAction<ListItem[]>>;
  reset: () => void;
}

export const TreeContext = createContext<TreeContextProps>({
  openedNodeIndex: "",
  setOpenedNodeIndex: () => {},
  nodes: [],
  setNodes: () => {},
  onNodesChange: () => {},
  edges: [],
  setEdges: () => {},
  onEdgesChange: () => {},
  lists: [],
  setLists: () => {},
  reset: () => {},
});

const TreeContextProvider = ({ children }: { children: ReactNode }) => {
  const [openedNodeIndex, setOpenedNodeIndex] = useState("");
  const [lists, setLists] = useState([
    {
      index: "1",
      title: "1일차",
      children: [] as string[],
      parents: [] as string[],
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      position: { x: 200, y: 80 },
      data: {
        index: "1",
        title: "첫 발걸음",
        content: "어떤 커리큘럼을 만들어 볼까요?",
        progress_individual: false,
        loc_x: 20,
        loc_y: 40,
        is_main_branch: true,
        checklist: [
          {
            content: "책 한 권 읽기",
            id: "asdf",
          },
          {
            content: "물 많이 마시기",
            id: "qwere",
          },
        ],
      },
      type: "custom",
    },
  ]);

  const reset = () => {
    setNodes([
      {
        id: "1",
        position: { x: 200, y: 80 },
        data: {
          index: "1",
          title: "첫 발걸음",
          content: "어떤 커리큘럼을 만들어 볼까요?",
          progress_individual: false,
          loc_x: 20,
          loc_y: 40,
          is_main_branch: true,
          checklist: [
            {
              content: "책 한 권 읽기",
              id: "asdf",
            },
            {
              content: "물 많이 마시기",
              id: "qwere",
            },
          ],
        },
        type: "custom",
      },
    ]);
    setEdges([]);
  };

  return (
    <TreeContext.Provider
      value={{
        openedNodeIndex,
        setOpenedNodeIndex,
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        lists,
        setLists,
        reset,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};

export default TreeContextProvider;

export const useTreeContext = () => useContext(TreeContext);
