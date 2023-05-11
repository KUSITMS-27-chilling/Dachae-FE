export interface TogetherData {
  nickname: string;
  time: string;
  recruiting: boolean;
  title: string;
  favFields: string[];
  goalNum: number;
  currentNum: number;
  tags: string[];
  programName: string;
}

export interface TogetherProp {
  prop: TogetherData
}