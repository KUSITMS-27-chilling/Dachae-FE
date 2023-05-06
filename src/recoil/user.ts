import { atom } from 'recoil';

export const loginId = atom<string>({
  key: 'loginId',
  default: '',
});