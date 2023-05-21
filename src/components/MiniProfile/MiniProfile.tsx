import { useEffect, useState } from "react";
import { 
  MiniProfileContainer,
  MiniProfileTapBox,
  MiniProfileTap,
  LearningGradeBox,
  LearningNewsBox,
  LearningGradeBar,
  MyActivityField
} from "./MiniProfile.styled";
import vane1 from '../../assets/vane1.png';
import vane2 from '../../assets/vane2.png';
import vane3 from '../../assets/vane3.png';
import vane4 from '../../assets/vane4.png';
import axios from "axios";

function MiniProfile() {
  const [selectedTap, setSelectedTap] = useState('learningGrade');
  const [favFields, setFavFields] = useState([]);
  const [userGrade, setUserGrade] = useState(2);
  const [userNick, setUserNick] = useState('');

  const lnArr = ['소식 본문1', '소식 본문2', '소식 본문3', '소식 본문 4'];

  function clickTap () {

  }

  function getLgInfo(){
    const token = localStorage.getItem('access_token');
    if(token == null) return;

    axios.get(`${import.meta.env.VITE_APP_HOST}/user/grade`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response);
    }).catch((err) => console.log(err));
  }

  useEffect(() => {
    // getLgInfo();
  }, [])

  return(
    <MiniProfileContainer>
      <MiniProfileTapBox>
        <MiniProfileTap className="active">나의 배움 등급</MiniProfileTap>
        <MiniProfileTap>나의 배움 소식</MiniProfileTap>
      </MiniProfileTapBox>
      {
          (selectedTap == 'learningGrade') && (
            <LearningGradeBox>
              <div id="learning-grade__grade-top">
                <LearningGradeBar>
                  <progress id="learning-grade__progress-bar" value={userGrade} max="10"/>
                  <div id="learning-grade__level-text">
                    <div id="learning-grade__low-level">기준 1</div>
                    <div id="learning-grade__high-level">기준 2</div>
                  </div>
                </LearningGradeBar>
                <img id="learning-grade__vane-img" src={vane1} alt="grade-img" />
              </div>
              <div id="learning-grade__grade-bottom">
                <div id="activity-field__text">나의 활동 분야</div>
                <div id="activity-field__container">
                  <div className="activity-field">#언어</div>
                  <div className="activity-field">#영어</div>
                  <div className="activity-field">#등산</div>
                  <div className="activity-field">#취미</div>
                </div>
              </div>
            </LearningGradeBox>
          )
        }
        {
          (selectedTap == 'learningNews') && (
            <LearningNewsBox>
              LNBox
            </LearningNewsBox>
          )
        }
    </MiniProfileContainer>
  )
}

export default MiniProfile;