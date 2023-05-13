interface GetTreeResponseType {
  id: string;
  owner: string;
  public: boolean;
  rating: number;
  title: string;
  description: string;
  nodes: {
    index: string;
    title: string;
    checklist: ChecklistType[];
    check_individual: boolean; // 개인용 체크인지 팀용(공통) 체크인지
    loc_x: number;
    loc_y: number;
  }[];

  edges: {
    id: string;
    source: string;
    target: string;
  }[];
}
