import Link from "next/link";
import {
  ColoredStarIcon,
  EmptyStarIcon,
  ForkIcon,
  HalfStarIcon,
} from "./Icons";
import { nanoid } from "nanoid";

const StudyItem = ({ data }: { data: any }) => {
  return (
    <Link href={`/curriculum/view/1`}>
      <div className="rounded bg-white shadow-shadow px-6 py-4 flex flex-col hover:-translate-y-1 transition-transform">
        <div className="font-bold flex justify-between">
          {data.title}
          <div className="text-sm">현재 3명 / 최대 5명</div>
        </div>
        <div className="font-normal text-sm"> by {data.owner}</div>

        <div className="line-clamp-3 py-1 leading-6">{data.description}</div>

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
            <div className="mr-1">난이도 2.5</div>
            {[...Array(Math.floor(2.5))].map((_, i) => (
              <ColoredStarIcon key={i} />
            ))}
            {2.5 > Math.floor(2.5) && <HalfStarIcon />}
          </div>

          <div>30 단계 / 73 체크리스트</div>
        </div>
      </div>
    </Link>
  );
};

export default function StudyList() {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {[...Array(9)].map((n, i) => (
        <StudyItem
          key={i}
          data={{
            title: "스터디 합시다",
            description:
              "대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를 한다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다. 국가는 사회보장·사회복지의 증진에 노력할 의무를 진다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.",
            owner: "madonna@asdf.com",
            rating: Math.ceil(Math.random() * 10),
            id: nanoid(),
          }}
        />
      ))}
    </div>
  );
}
