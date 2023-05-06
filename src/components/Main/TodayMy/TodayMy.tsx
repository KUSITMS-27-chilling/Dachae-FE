import { 
  TodayMyContainer, 
  TodayMyTop,
  TodayTapBox,
  TodayBottom
} from "./TodayMy.styled";
import MainBodyTodayTap from "../TodayMyTap";

function MainBodyTodayMy(props: any) {
  return(
    <TodayMyContainer>
      <TodayMyTop>
        <div className='MainBody_Today_My_Top_logout'>
        <button>로그아웃</button></div>
      </TodayMyTop>
      <TodayTapBox>
        <MainBodyTodayTap />
      </TodayTapBox>
      <TodayBottom>
        <div className='TapBtn'>
          <button>마이페이지 바로가기</button>
        </div>
      </TodayBottom>
    </TodayMyContainer>
  )
}

export default MainBodyTodayMy;