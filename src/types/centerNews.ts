export type LGProgram = {
  programTitle: string;
  programPeriod: string;
}

export type LGData = {
  region: string;
  programs: LGProgram[];
}

export interface LGDataArr {
  lgData: LGData[];
}