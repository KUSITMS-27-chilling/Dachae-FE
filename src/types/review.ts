export type detailOrCommu = 'detail' | 'community';

// api 나오면 타입 재점검
export interface ReviewData {
  userImg?: string;
  userNick: string;
  time: string;
  title: string;
  lecture: string;
  content: string;
  region: string;
  reviewIdx: number;
  detailPlace: string;
  reviewImg?: string[];
  detailOrCommu: detailOrCommu;
}

export interface CommuReviewData {
  region: string;
  reviews: ReviewData[]
}

export type ReviewProps = {
  props: ReviewData
}