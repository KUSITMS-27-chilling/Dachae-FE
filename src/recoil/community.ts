import { atom } from 'recoil';
import { CommuTabType } from '../types/communityTab';

export const commuTabKind = atom<CommuTabType>({
  key: 'commuTabKind',
  default: 'review',
});
