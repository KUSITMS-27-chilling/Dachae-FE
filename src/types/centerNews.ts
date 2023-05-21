export type LGProgram = {
  programTitle: string;
  programPeriod: string;
  programUrl: string;
}

export type LGData = {
  region: string;
  programs: LGProgram[];
}

export interface LGDataArr {
  lgData: LGData[];
}