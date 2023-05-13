export function getSampleContents() {
  const list = [
    { title: "집안 청소하기", content: "오늘은 거실과 방을 청소해보세요." },
    {
      title: "독서 챌린지 시작하기",
      content:
        "이번 달에는 한 권 이상의 책을 읽어보는 독서 챌린지를 시작해보세요.",
    },
    {
      title: "맛있는 요리 도전하기",
      content: "집에서 간단한 레시피를 찾아 요리에 도전해보세요.",
    },
    {
      title: "하루 1분 스트레칭",
      content: "하루 1분씩 스트레칭을 하면 몸 상태가 매우 개선됩니다.",
    },
    {
      title: "DIY 인테리어 만들기",
      content:
        "집에서 쉽게 만들 수 있는 DIY 인테리어 아이디어를 찾아서 시도해보세요.",
    },
    {
      title: "한 줄 일기 쓰기",
      content: "매일 하루 일과를 한 줄로 간단히 기록해보세요.",
    },
    {
      title: "댄스 배우기",
      content: "온라인으로 쉽게 배울 수 있는 댄스 동영상을 찾아 따라해보세요.",
    },
    {
      title: "매일 5분 명상하기",
      content:
        "매일 5분 정도 명상을 하면 스트레스를 효과적으로 해소할 수 있습니다.",
    },
    {
      title: "집콕 브런치 만들기",
      content: "집에서 간단하게 만들 수 있는 브런치 아이디어를 찾아보세요.",
    },
    {
      title: "업사이클링 도전하기",
      content: "집에 있는 것들을 재활용하여 새로운 물건을 만들어보세요.",
    },
  ];
  return list[Math.floor(Math.random() * list.length)];
}
