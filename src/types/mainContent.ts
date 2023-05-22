export type MainProgramData = {
  programName?: string;
  programEnd?: string;
  programUrl?: string;
  programCategory?: string;
}

export interface MainContentData {
  region: string;
  favCount: number;
  programs: Array<MainProgramData>;
}

export interface MainContentProp {
  prop: MainContentData;
}