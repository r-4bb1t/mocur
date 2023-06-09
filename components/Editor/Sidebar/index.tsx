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
import { useSession } from "next-auth/react";
import { EmptyStarIcon, ForkIcon } from "@/components/Icons";

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
  edges: Edge<any>[],
  owner: string
) => {
  return {
    data: {
      title: title,
      description: description,
      owner: owner,
      public: isPublic,
      rating: rating, // integer: 1~10
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
        return { source: edge.source, target: edge.target };
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

  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = (
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_HOST}/trees/`,
          setReq(
            title,
            description,
            isPublic,
            rating,
            nodes,
            edges,
            session?.user?.email ?? "1"
          ),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
      router.push(`/curriculum/view/${res.id}`);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 bg-white h-full rounded-tr-lg shadow-shadow py-8 px-6 shrink-0 z-10 flex flex-col">
      {edit ? (
        <input
          className="font-bold text-xl input input-bordered w-full shrink-0"
          placeholder="커리큘럼 제목"
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <div className="font-bold text-xl w-full input-sm">{data?.title}</div>
      )}
      {!edit && (
        <>
          <div className="flex flex-col gap-2 px-3">
            <div className="text-sm">by {data?.owner}</div>
            <div className="flex items-center gap-0.5">
              <div className="font-bold text-sm">
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
          className="mt-3 h-full text-sm textarea textarea-bordered w-full input-sm resize-none"
          placeholder="커리큘럼 설명"
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <div className="mt-2 text-sm h-full w-full input-sm leading-6">
          {data?.description}
        </div>
      )}
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
          disabled={loading || title.length === 0 || description.length === 0}
        >
          {loading ? (
            <BeatLoader color="white" size={"8px"} />
          ) : (
            "커리큘럼 등록하기"
          )}
        </button>
      )}
      {!edit && (
        <div className="w-full flex gap-4 items-center px-3 justify-end">
          <div className="tooltip tooltip-top" data-tip="찜하기">
            <button className="hover:scale-90 transition-all">
              <EmptyStarIcon className="w-8 h-8" />
            </button>
          </div>
          <div className="tooltip tooltip-top" data-tip="포크하기">
            <button className="hover:scale-90 transition-all">
              <ForkIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
