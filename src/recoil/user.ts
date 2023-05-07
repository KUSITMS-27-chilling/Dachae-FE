import { atom } from 'recoil';

export const loginId = atom<string>({
  key: 'loginId',
  default: '',
});

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});