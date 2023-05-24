export interface ProgramCardInfo {
  category?: string;
  title: string;
  btnClick: React.MouseEventHandler<HTMLButtonElement>;
  deadline: string;
}