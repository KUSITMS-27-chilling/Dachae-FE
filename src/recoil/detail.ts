import { atom } from 'recoil';
import { DetailTabType } from '../types/detailTab';

export const detailTabKind = atom<DetailTabType>({
  key: 'detailTabKind',
  default: 'together',
});
