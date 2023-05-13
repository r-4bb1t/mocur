import { useTreeContext } from "@/contexts/treeContexts";
import cc from "classcat";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Rating } from "./Rating";
import axios from "axios";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";
import { Edge, Node } from "reactflow";

const Item = ({ item, deg }: { item: ListItem; deg: number }) => {
  const { lists } = useTreeContext();
  const classes = [
    "font-bold text-lg",
    "font-semibold text-base",
    "font-medium text-sm",
    "font-regular text-sm",
  ];
  return (
    <li
      className={cc([
        "list-disc list-inside mb-2 ml-3",
        classes[Math.min(deg, classes.length - 1)],
      ])}
    >
      {item.title}
      <ul>
        {item.children.map((child) => (
          <Item
            key={child}
            item={lists.filter((item) => item.index === child)[0]}
            deg={deg + 1}
          />
        ))}
      </ul>
    </li>
  );
};

const setReq = (
  title: string,
  description: string,
  isPublic: boolean,
  rating: number,
  nodes: Node<any, string | undefined>[],
  edges: Edge<any>[]
) => {
  return {
    data: {
      title: title,
      description: description,
      owner: "userId",
      public: isPublic,
      rating: 1, // integer: 1~10
      nodes: nodes.map((node) => {
        return {
          index: parseInt(node.id), // 1부터 순차적으로 증가
          title: node.data.title,
          content: node.data.content, // markdown
          progress_individual: false,
          loc_x: node.position.x,
          loc_y: node.position.y,
          checklist: node.data.checklist,
        };
      }),
      edges: edges.map((edge) => {
        return { id: edge.id, source: edge.source, target: edge.target };
      }),
    },
  };
};

export default function Sidebar({
  edit = true,
  data,
}: {
  edit?: boolean;
  data?: GetTreeResponseType;
}) {
  const { nodes, edges, lists } = useTreeContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = (
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_HOST}/trees`,
          setReq(title, description, isPublic, rating, nodes, edges),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-80 bg-white h-full rounded-tr-lg shadow-shadow py-8 px-4 shrink-0 z-10">
      {edit ? (
        <input
          className="font-bold text-xl input input-bordered w-full input-sm"
          placeholder="커리큘럼 제목"
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <div className="font-bold text-xl w-full input-sm">{data?.title}</div>
      )}
      {!edit && (
        <>
          <div className="flex items-center justify-between px-3">
            <div className="text-sm">by @{data?.owner}</div>
            <div className="flex items-center gap-0.5">
              <div className="font-bold text-xs">
                난이도 {data?.rating} / 10
              </div>
              <Rating
                rating={data?.rating ?? 0}
                setRating={() => {}}
                readonly
              />
            </div>
          </div>
        </>
      )}
      {edit ? (
        <textarea
          className="mt-2 h-32 text-sm textarea textarea-bordered w-full input-sm resize-none"
          placeholder="커리큘럼 설명"
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <div className="mt-2 text-sm w-full input-sm">{data?.description}</div>
      )}
      {/* <ul className="mt-2">
        {lists.map(
          (item) =>
            item.parents.length === 0 && (
              <Item key={item.index} item={item} deg={0} />
            )
        )}
      </ul> */}
      {edit && (
        <div className="flex items-center justify-between py-4">
          <div className="font-bold text-lg">난이도 {rating} / 10</div>
          <Rating rating={rating} setRating={setRating} />
        </div>
      )}
      {edit && (
        <div className="flex items-center justify-end gap-2 mb-4">
          {isPublic ? "공개" : "비공개"}
          <input
            type="checkbox"
            className="toggle toggle-md toggle-primary"
            defaultChecked={isPublic}
            onChange={() => setIsPublic((s) => !s)}
          />
        </div>
      )}
      {edit && (
        <button
          className="py-2 px-3 text-center rounded hov bg-main text-white gap-2 font-bold w-full disabled:bg-black-500"
          onClick={() => handleSubmit()}
          disabled={loading}
        >
          {loading ? <BeatLoader color="white" /> : "커리큘럼 등록하기"}
        </button>
      )}
    </div>
  );
}
