import Link from "next/link";
import {
  ColoredStarIcon,
  EmptyStarIcon,
  ForkIcon,
  HalfStarIcon,
} from "./Icons";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "./Editor/Sidebar/Rating";

const CurItem = ({ data }: { data: GetTreeResponseType }) => {
  return (
    <Link href={`/curriculum/view/${data.id}`}>
      <div className="rounded bg-white shadow-shadow px-6 py-4 flex flex-col hover:-translate-y-1 transition-transform">
        <div className="flex justify-between">
          <div className="font-bold">
            {data.title}
            <span className="font-normal text-sm"> by {data.owner}</span>
          </div>
          <div className="flex items-center gap-2 text-main-darker text-xs font-semibold">
            <EmptyStarIcon />
            <div className="mr-2">233</div>
            <ForkIcon />
            <div>234</div>
          </div>
        </div>

        <div className="py-1 leading-6 h-[72px] line-clamp-3">
          {data.description}
        </div>

        <div className="flex gap-2 py-4">
          <div className="px-2 py-1 rounded-full font-medium text-xs shadow-shadow">
            Web
          </div>
          <div className="px-2 py-1 rounded-full font-medium text-xs shadow-shadow">
            Frontend
          </div>
          <div className="px-2 py-1 rounded-full font-medium text-xs shadow-shadow">
            HTML
          </div>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <div className="flex items-center">
            <div className="mr-1">난이도 {data.rating}</div>
            <Rating readonly rating={data.rating} setRating={() => {}} />
          </div>

          <div>
            {data.nodes?.length} 단계 /{" "}
            {data.nodes?.reduce((acc, node) => acc + node.checklist.length, 0)}{" "}
            체크리스트
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function CurLists() {
  const [data, setData] = useState<GetTreeResponseType[]>([]);

  const getData = useCallback(async () => {
    try {
      const res = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/trees/all`)
      ).data;
      setData(res);
    } catch (e) {}
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {data.map((item, i) => (
        <CurItem
          key={i}
          data={{
            title: item.title,
            description: item.description,
            owner: item.owner,
            rating: item.rating,
            id: item.id,
            nodes: item.nodes,
            edges: item.edges,
          }}
        />
      ))}
    </div>
  );
}
