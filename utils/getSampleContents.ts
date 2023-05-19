export function getSampleContents() {
  const list = [
    {
      title: "식사하기",
      content:
        "건강한 식습관을 위해 오늘 식사를 규칙적으로 하며 영양소를 충분히 섭취해보세요.",
      checklist: [
        { id: "0001", content: "야채와 과일을 충분히 섭취하기" },
        { id: "0002", content: "간식 대신 건강한 간식 챙겨먹기" },
      ],
    },
    {
      title: "운동하기",
      content: "건강한 삶을 위해 오늘 운동을 하며 체력을 키워보세요.",
      checklist: [
        { id: "0003", content: "스트레칭으로 몸을 풀기" },
        { id: "0004", content: "유산소 운동으로 심폐기능 향상시키기" },
        { id: "0005", content: "근력 운동으로 근육 톤업하기" },
      ],
    },
    {
      title: "독서하기",
      content: "지식과 상상력을 키우기 위해 오늘 책을 읽어보세요.",
      checklist: [
        { id: "0006", content: "흥미로운 책 선택하기" },
        { id: "0007", content: "독서시간에 집중하기" },
      ],
    },
    {
      title: "자기계발하기",
      content:
        "새로운 분야를 공부하거나, 기존에 알고 있던 지식을 활용해 스스로 발전해보세요.",
      checklist: [
        { id: "0008", content: "새로운 분야에 대한 서적 구매하기" },
        { id: "0009", content: "정해진 시간 동안 집중해서 공부하기" },
      ],
    },
    {
      title: "봉사활동하기",
      content: "사회적인 가치를 실현하기 위해 봉사활동을 해보세요.",
      checklist: [
        { id: "0010", content: "관심 있는 봉사활동 찾기" },
        { id: "0011", content: "일정 잡고 참여하기" },
      ],
    },
    {
      title: "영어공부하기",
      content: "세계를 넓히기 위해 오늘은 영어공부를 해보세요.",
      checklist: [
        { id: "0012", content: "공부할 자료 찾기" },
        { id: "0013", content: "영어공부에 집중하기" },
      ],
    },
    {
      title: "창작활동하기",
      content: "상상력을 발휘하며 창작활동을 즐겨보세요.",
      checklist: [
        { id: "0014", content: "창작을 위한 자료 모으기" },
        { id: "0015", content: "창작에 집중하기" },
      ],
    },
    {
      title: "식단 계획 세우기",
      content: "오늘 하루 3끼 식사 계획을 세워보세요.",
      checklist: [
        { id: "randomsadsftring", content: "주변 식당 정보 조사하기" },
        { id: "tasdfringas", content: "야채와 과일을 준비해보세요." },
      ],
    },
    {
      title: "독서 시간 확보하기",
      content: "하루 30분 독서를 하며 지식을 쌓아보세요.",
      checklist: [
        { id: "randomsccastring", content: "독서 북마크 리스트 작성하기" },
        { id: "tasdfriafsng", content: "하루 일정 중 독서 시간 확보하기" },
      ],
    },
    {
      title: "물 마시기 습관 만들기",
      content: "하루에 물 2L 이상 마시는 습관을 만들어보세요.",
      checklist: [
        { id: "randomsatring", content: "물병을 한 개씩 집, 회사에 두기" },
        {
          id: "tasdfrinffg",
          content: "물 맛을 개선할 수 있는 방법 찾아보기",
        },
      ],
    },
    {
      title: "스마트폰 사용 시간 줄이기",
      content: "하루에 스마트폰 사용 시간을 1시간 이하로 유지해보세요.",
      checklist: [
        { id: "randomstr1ing", content: "스마트폰 앱 사용량 기록하기" },
        {
          id: "tasdfrin23g",
          content: "다른 취미를 찾아보며 스마트폰 시간 대체하기",
        },
      ],
    },
    {
      title: "산책하기",
      content: "오늘은 한 시간 동안 산책을 즐겨보세요.",
      checklist: [
        { id: "randomstri42ng", content: "산책할 장소 정하기" },
        { id: "tasdfrinsadg", content: "산책 동반자와 함께하기" },
      ],
    },
  ];
  return list[Math.floor(Math.random() * list.length)];
}
