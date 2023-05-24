import { useState } from "react";
import vane1 from '../assets/vane1.png';
import vane2 from '../assets/vane2.png';
import vane3 from '../assets/vane3.png';
import vane4 from '../assets/vane4.png';

export default function useGrade(grade: number) {
  const [standardNum, setStandardNum] = useState(1);
  const [gradeImg, setGradeImg] = useState(vane1);

  const gradeHandler = () => {
    if((grade >= 0) && (grade < 10)) {
      setGradeImg(vane1);
      setStandardNum(1);
      return;
    }
    else if((grade >=10) && (grade < 20)) {
      setGradeImg(vane2);
      setStandardNum(2);
      return;
    }
    else if((grade >= 20) && (grade < 30)) {
      setGradeImg(vane3);
      setStandardNum(3);
      return;
    }
    else if((grade > 30)) {
      setGradeImg(vane4);
      setStandardNum(4);
      return;
    }
    else return;
  }

  return { gradeImg, standardNum, gradeHandler };

}