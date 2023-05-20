import { atom } from 'recoil';


export const suggestRegions = atom<string[]>({
  key: 'commuRegions',
  default: []
});

export const selectRegion = atom<string>({
  key: 'selectedRegion',
  default: "전체보기"
});