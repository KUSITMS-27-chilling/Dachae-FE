import { 
  TodayMyTop,
  TodayTapBox,
  TodayBottom
} from "../TodayMyIn/TodayMyIn.styled";
import MainBodyTodayTap from "../TodayMyTap";

function TodayMyIn() {
  return (
    <div>
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
    </div>
  )
}

export default TodayMyIn;