import { atom } from 'recoil';
import { CommuTabType } from '../types/communityTab';

export const commuTabKind = atom<CommuTabType>({
  key: 'commuTabKind',
  default: 'review',
});

export const commuRegions = atom<string[]>({
  key: 'commuRegions',
  default: []
});

export const selectedRegion = atom<string>({
  key: 'selectedRegion',
  default: "모든 지역보기"
});