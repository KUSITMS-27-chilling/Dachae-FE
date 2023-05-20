import { atom } from 'recoil';

export const favRegs = atom<string[]>({
  key: 'favRegs',
  default: [],
});