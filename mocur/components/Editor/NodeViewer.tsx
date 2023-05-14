import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";

export default function NodeViewer({ data }: { data: NodeDataType }) {
  const viewerRef = useRef<Viewer>(null);

  useEffect(() => {
    viewerRef.current!.getInstance().setMarkdown(data.content);
  }, [data]);

  return <Viewer ref={viewerRef} />;
}
