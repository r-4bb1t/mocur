import {
  ColoredStarIcon,
  EmptyStarIcon,
  ForkIcon,
  HalfStarIcon,
} from "./Icons";

const CurItem = () => {
  return (
    <div className="rounded bg-white shadow-shadow px-6 py-4 flex flex-col">
      <div className="flex justify-between">
        <div className="font-bold">
          <span>💗 </span>
          프론트엔드 첫 입문{" "}
          <span className="font-normal text-sm"> by @madonna</span>
        </div>
        <div className="flex items-center gap-2 text-main-darker text-xs font-semibold">
          <EmptyStarIcon />
          <div className="mr-2">233</div>
          <ForkIcon />
          <div>234</div>
        </div>
      </div>

      <div className="line-clamp-3">
        산모퉁이를 돌아 논가 외딴 우물을 홀로 찾아가선 가만히 들여다봅니다. 우물
        속에는 달이 밝고 구름이 흐르고 하늘이 펼치고 파아란 바람이 불고 가을이
        있습니다. 그리고 한 사나이가 있습니다. 어쩐지 그 사나이가 미워져
        돌아갑니다. 돌아가다 생각하니 그 사나이가 가엾어집니다. 산모퉁이를 돌아
        논가 외딴 우물을 홀로 찾아가선 가만히 들여다봅니다. 우물 속에는 달이
        밝고 구름이 흐르고 하늘이 펼치고 파아란 바람이 불고 가을이 있습니다.
        그리고 한 사나이가 있습니다. 어쩐지 그 사나이가 미워져 돌아갑니다.
        돌아가다 생각하니 그 사나이가 가엾어집니다.
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
          <div className="mr-1">난이도 2.5</div>
          {[...Array(Math.floor(2.5))].map((_, i) => (
            <ColoredStarIcon key={i} />
          ))}
          {2.5 > Math.floor(2.5) && <HalfStarIcon />}
        </div>

        <div>30 단계 / 73 체크리스트</div>
      </div>
    </div>
  );
};

export default function CurLists() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {[...Array(4)].map((n, i) => (
        <CurItem key={i} />
      ))}
    </div>
  );
}
