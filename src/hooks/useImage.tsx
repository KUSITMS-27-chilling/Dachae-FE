import { useState } from "react";
import etc_default from '../assets/etc_default.png';
import leisure_default from '../assets/leisure_default.png';
import liberal_default from '../assets/liberal_default.png';
import participation_default from '../assets/participation_default.png';
import job_default from '../assets/job_default.png';
import selfdevelop_default from '../assets/selfdevelop_default.png';
import small_etc from '../assets/small_etc.png';
import small_leisure from '../assets/small_leisure.png';
import small_liberal from '../assets/small_liberal.png';
import small_participation from '../assets/small_participation.png';
import small_job from '../assets/small_job.png';
import small_selfdevelop from '../assets/small_selfdevelop.png';

export default function useImage(detail: boolean, category?: string) {
  const [imgUrl, setImgUrl] = useState(etc_default);

  const imgHandler = () => {
    switch(category) {
      case '기타':
        setImgUrl(detail ? small_etc : etc_default);
        break;
      case '문화여가':
        setImgUrl(detail ? small_leisure : leisure_default);
        break;
      case '인문교양':
        setImgUrl(detail ? small_liberal : liberal_default);
        break;
      case '시민참여':
        setImgUrl(detail ? small_participation : participation_default);
        break;
      case '직업교육':
        setImgUrl(detail ? small_job : job_default);
        break;
      case '자기개발':
        setImgUrl(detail ? small_selfdevelop : selfdevelop_default);
        break;
      default:
        setImgUrl(detail ? small_etc : etc_default);
        break;
    }
  }

  return { imgUrl, imgHandler };

}