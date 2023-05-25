import { atom } from 'recoil';

export const togetherToggle = atom<boolean>({
  key: 'togetherToggle',
  default: false,
});