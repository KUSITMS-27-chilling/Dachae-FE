import { detailOrCommu } from "./review";

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
  listenIdx: number;
  detailOrCommu: detailOrCommu;
  //profile:string;
}

export interface CommuTogetherData {
  region: string;
  togethers: TogetherData[];
}

export interface TogetherProp {
  prop: TogetherData
}