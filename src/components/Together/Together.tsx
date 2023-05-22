import { 
  TogetherContainer,
  TogetherTitle,
  TogetherInfo,
  TogetherFooter,
  ReviewProfile,
  ReviewPlace
} from "./Together.styled";
import { useEffect, useState } from "react";
import recruiting_img from '../../assets/recruiting.png';
import recruited_img from '../../assets/recruited.png';
import { TogetherProp } from "../../types/together";
import { useNavigate } from "react-router-dom";

function Together ({ prop }: TogetherProp) {
  const navigate = useNavigate();
  const [favStr, setFavStr] = useState<string>('');

  const favToStr = (favFields: Array<string>):void => {
    let tempStr = '';
    if(favFields.length <= 0) return;
    
    if(favFields.length == 1) {
      setFavStr(favFields[0]);
      return;
    }

    tempStr = favFields[0];
    for(let i = 1; i < favFields.length; i++) {
      tempStr +=`, ${favFields[i]}`;
    }
    setFavStr(tempStr);

    return;
  }

  useEffect(() => {
    favToStr(prop.favFields);
  }, [])

  function clickTogether() {
    navigate(`/commu/together/${prop.listenIdx}`);
    return;
  }

  return(
    <TogetherContainer detailOrCommu={prop.detailOrCommu} >
      <ReviewProfile topProp={true} profile={(prop.profile) ? prop.profile : ''} >
        <div id="review__profile-photo"></div>
        <div>
          <div id="review__profile-nickname">{prop.nickname}</div>
          <div id="review__profile-time">{prop.time}</div>
        </div>
      </ReviewProfile>
      <TogetherTitle recruiting={prop.recruiting} onClick={clickTogether} >
        <div id="together__recruiting">{prop.recruiting ? "모집중" : "모집완료"}</div>
        <div id="together__title">{prop.title}</div>
      </TogetherTitle>
      <TogetherInfo>
        <div id="together__fav-fields">지원자 활동 분야: {favStr}</div>
        <div id="together__goal-num">희망 인원: {prop.goalNum}명</div>
      </TogetherInfo>
      <TogetherFooter detailOrCommu={prop.detailOrCommu} >
        <ReviewPlace topProp={true} >
            <div id="review__place-region">&#35;{prop.tags[0]}</div>
            <div id="review__place-detail">&#35;{prop.tags[1]}</div>
        </ReviewPlace>
        <div id="together__program-name">{prop.programName}</div>
        <img id="together__recruit-img" src={prop.recruiting ? recruiting_img : recruited_img} alt="recruit-img" />
        <div id="together__hit-and-goal">{prop.currentNum}/{prop.goalNum}</div>
      </TogetherFooter>
    </TogetherContainer>
  )
}

export default Together;