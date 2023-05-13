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

export default function Sidebar({
  edit = true,
  data,
}: {
  edit?: boolean;
  data?: GetTreeResponseType;
}) {
  const { lists } = useTreeContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);

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
        <button className="py-2 px-3 text-center rounded hov bg-main text-white gap-2 font-bold w-full">
          커리큘럼 등록하기
        </button>
      )}
    </div>
  );
}
