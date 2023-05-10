import { 
  TogetherContainer,
  TogetherTitle,
  TogetherInfo,
  TogetherFooter
} from "./Together.styled";
import { 
  ReviewProfile,
  ReviewPlace
} from "../Review/Review.styled";
import { useEffect, useState } from "react";
import recruiting_img from '../../assets/recruiting.png';
import recruited_img from '../../assets/recruited.png';

function Together () {
  const [favStr, setFavStr] = useState<string>('');

  // 추후 api 호출 반영을 위한 동적 데이터
  const props = {
    nickname: '다채 고수',
    time: '18시간 전',
    recruiting: true,
    title: '성복구 레진아트 강좌 같이 들을 분 계실까요?^^',
    favFields: [
      "문화여가", "자기계발"
    ],
    goalNum: 5,
    hits: 2,
    tags: [
      "은평구",
      "봉산아래공동체주택동네배움터"
    ],
    programName: "초보를 위한 레진아트 수업"
  }

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
    favToStr(props.favFields);
  }, [])

  return(
    <TogetherContainer>
      <ReviewProfile topProp={true}>
        <div id="review__profile-photo"></div>
        <div>
          <div id="review__profile-nickname">{props.nickname}</div>
          <div id="review__profile-time">{props.time}</div>
        </div>
      </ReviewProfile>
      <TogetherTitle recruiting={props.recruiting}>
        <div id="together__recruiting">{props.recruiting ? "모집중" : "모집완료"}</div>
        <div id="together__title">{props.title}</div>
      </TogetherTitle>
      <TogetherInfo>
        <div id="together__fav-fields">지원자 활동 분야: {favStr}</div>
        <div id="together__goal-num">희망 인원: {props.goalNum}명</div>
      </TogetherInfo>
      <TogetherFooter>
        <ReviewPlace topProp={true} >
            <div id="review__place-region">&#35;{props.tags[0]}</div>
            <div id="review__place-detail">&#35;{props.tags[1]}</div>
        </ReviewPlace>
        <div id="together__program-name">{props.programName}</div>
        <img id="together__recruit-img" src={props.recruiting ? recruiting_img : recruited_img} alt="recruit-img" />
        <div id="together__hit-and-goal">{props.hits}/{props.goalNum}</div>
      </TogetherFooter>
    </TogetherContainer>
  )
}

export default Together;