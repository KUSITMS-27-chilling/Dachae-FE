import { atom } from 'recoil';
import { TeacherTabType } from '../types/Teacher';

export const TeacherTabKind = atom<TeacherTabType>({
  key: 'TeacherTabKind',
  default: 'Teacherinfo',
});