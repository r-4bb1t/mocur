import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";

export default function NodeViewer({ data }: { data: NodeDataType }) {
  const viewerRef = useRef<Viewer>(null);

  useEffect(() => {
    if (!viewerRef.current) return;
    viewerRef.current!.getInstance().setMarkdown(data.content);
    console.log(data);
  }, [data, viewerRef.current]);

  return <Viewer ref={viewerRef} />;
}
