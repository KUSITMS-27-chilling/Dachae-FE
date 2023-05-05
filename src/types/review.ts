// api 나오면 타입 재점검
export interface ReviewData {
  userImg?: string;
  userNick: string;
  time: string;
  title: string;
  lecture: string;
  content: string;
  region: string;
  detailPlace: string;
  reviewImg?: string[];
}

export type ReviewProps = {
  props: ReviewData
}