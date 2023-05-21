import { atom } from 'recoil';


export const suggestRegions = atom<string[]>({
  key: 'suggestRegions',
  default: []
});

export const selectRegion = atom<string>({
  key: 'selectRegion',
  default: "전체보기"
});