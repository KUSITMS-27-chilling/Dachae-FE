import { useState } from "react";
import etc_default from '../assets/etc_default.png';
import leisure_default from '../assets/leisure_default.png';
import liberal_default from '../assets/liberal_default.png';
import participation_default from '../assets/participation_default.png';
import job_default from '../assets/job_default.png';
import selfdevelop_default from '../assets/selfdevelop_default.png';

export default function useImage(category?: string) {
  const [imgUrl, setImgUrl] = useState(etc_default);

  const imgHandler = () => {
    switch(category) {
      case '기타':
        setImgUrl(etc_default);
        break;
      case '문화여가':
        setImgUrl(leisure_default);
        break;
      case '인문교양':
        setImgUrl(liberal_default);
        break;
      case '시민참여':
        setImgUrl(participation_default);
        break;
      case '직업교육':
        setImgUrl(job_default);
        break;
      case '자기개발':
        setImgUrl(selfdevelop_default);
        break;
      default:
        setImgUrl(etc_default);
        break;
    }
  }

  return { imgUrl, imgHandler };

}