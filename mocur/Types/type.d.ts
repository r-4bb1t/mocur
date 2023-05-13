interface NodeDataType {
  index: string;
  title: string;
  content: string;
  checklist: ChecklistType[];
}

interface FlowNodeType {
  id: string;
  position: {
    x: number;
    y: number;
  };
  type: string;
  data: NodeDataType;
}

interface ChecklistType {
  content: string;
  id: string;
}

interface ListItem {
  index: string;
  children: string[];
  title: string;
  parents: string[];
}

interface EdgeType {
  id: string;
  source: string;
  target: string;
  animated: boolean;
  style: CSSProperties;
}
