import { useEffect, useState } from "react";
import { 
  MiniProfileContainer,
  MiniProfileTapBox,
  MiniProfileTap,
  LearningGradeBox,
  LearningNewsBox,
  LearningGradeBar,
  LearningNews
} from "./MiniProfile.styled";
import vane1 from '../../assets/vane1.png';
import vane2 from '../../assets/vane2.png';
import vane3 from '../../assets/vane3.png';
import vane4 from '../../assets/vane4.png';
import x_mark from '../../assets/x_mark.png';
import { userGrade } from "../../recoil/user";
import { useRecoilValue } from "recoil";

function MiniProfile({ favField }: { favField: Array<string>}) {
  const [selectedTap, setSelectedTap] = useState('learningGrade');
  const [gradeImg, setGradeImg] = useState(vane4);
  const [standardNum, setStandardNum] = useState(1);
  const grade = useRecoilValue(userGrade);

  const lnArr = ['내가 작성한 같이듣기 인원이 찼습니다.', 
                'herblee 님이 같이 듣기를 신청하였습니다.', 
                'hyuna 님이 같이 듣기를 신청하였습니다.', 
                '다채님이 같이 듣기를 신청하였습니다.'];

  function clickTap (e:React.MouseEvent<HTMLDivElement>) {
    const tapArr = document.querySelectorAll('.mini-profile__tap');
    tapArr.forEach((el) => {
      el.classList.remove('active');
    })
    e.currentTarget.classList.add('active');

    if(e.currentTarget.dataset.text == 'learningGrade') setSelectedTap('learningGrade');
    if(e.currentTarget.dataset.text == 'learningNews') setSelectedTap('learningNews');
  }

  function setGrade() {
    if((grade >= 0) && (grade < 10)) {
      setGradeImg(vane1);
      setStandardNum(1);
    }
    else if((grade >=10) && (grade < 20)) {
      setGradeImg(vane2);
      setStandardNum(2);
    }
    else if((grade >= 20) && (grade < 30)) {
      setGradeImg(vane3);
      setStandardNum(3);
    }
    else if((grade > 30)) {
      setGradeImg(vane4);
      setStandardNum(4);
    }
    else return;
  }

  function addSeeMore(titleStr: string): string {
    let tempStr = titleStr;

    if(titleStr.length > 18) {
      tempStr = tempStr.slice(0, 17);
      tempStr += '...'
      return tempStr;
    }

    return tempStr;
  }

  useEffect(() => {
    setGrade();
  }, [grade])

  return(
    <MiniProfileContainer>
      <MiniProfileTapBox>
        <MiniProfileTap className="mini-profile__tap active" data-text='learningGrade' onClick={clickTap}>나의 배움 등급</MiniProfileTap>
        <MiniProfileTap className="mini-profile__tap" data-text='learningNews' onClick={clickTap} >나의 배움 소식</MiniProfileTap>
      </MiniProfileTapBox>
      {
          (selectedTap == 'learningGrade') && (
            <LearningGradeBox>
              <div id="learning-grade__grade-top">
                <LearningGradeBar>
                  <progress id="learning-grade__progress-bar" value={grade % 10} max="10"/>
                  <div id="learning-grade__level-text">
                    <div id="learning-grade__low-level">기준 {standardNum}</div>
                    <div id="learning-grade__high-level">기준 {standardNum+1}</div>
                  </div>
                </LearningGradeBar>
                <img id="learning-grade__vane-img" src={gradeImg} alt="grade-img" />
              </div>
              <div id="learning-grade__grade-bottom">
                <div id="activity-field__text">나의 활동 분야</div>
                <div id="activity-field__container">
                  {
                    favField && favField.map((el, idx) => (
                      <div className="activity-field" key={idx}>#{el}</div>
                    ))
                  }
                </div>
              </div>
            </LearningGradeBox>
          )
        }
        {
          (selectedTap == 'learningNews') && (
            <LearningNewsBox>
              {
                lnArr.map((el, idx) => (
                  <LearningNews key={idx}>
                    <div id="learning-news__circle"></div>
                    <div id="learning-news__title">{addSeeMore(el)}</div>
                    <img id="learning-news__x" src={x_mark} alt="x-mark" />
                  </LearningNews>
                ))
              }
            </LearningNewsBox>
          )
        }
    </MiniProfileContainer>
  )
}

export default MiniProfile;