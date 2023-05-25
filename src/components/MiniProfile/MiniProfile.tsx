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
import useGrade from "../../hooks/useGrade";

function MiniProfile({ favField }: { favField: Array<string>}) {
  const [selectedTap, setSelectedTap] = useState('learningGrade');
  const grade = useRecoilValue(userGrade);
  const { gradeImg, standardNum, gradeHandler } = useGrade(grade);

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

  function addSeeMore(titleStr: string): string {
    let tempStr = titleStr;

    if(titleStr.length > 18) {
      tempStr = tempStr.slice(0, 17);
      tempStr += '...'
      return tempStr;
    }

    return tempStr;
  }

  function checkStartGrade(standardNum: number): string {
    if(standardNum < 0) return '';
    if(standardNum <= 3) return `등급 ${standardNum}`;
    return '최고 등급입니다!';
  }

  function checkEndGrade(standardNum: number): string {
    if(standardNum >= 4) return '';
    return `등급 ${standardNum + 1}`;
  }

  function returnProgress(grade: number): number {
    if(grade >= 30) return 10;
    return grade % 10;
  }

  useEffect(() => {
    gradeHandler();
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
                  <progress id="learning-grade__progress-bar" value={returnProgress(grade)} max="10"/>
                  <div id="learning-grade__level-text">
                    <div id="learning-grade__low-level">{checkStartGrade(standardNum)}</div>
                    <div id="learning-grade__high-level">{checkEndGrade(standardNum)}</div>
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