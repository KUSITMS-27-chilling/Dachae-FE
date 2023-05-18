import { 
  TodayMyTop,
  TodayTapBox,
  TodayBottom
} from "../TodayMyIn/TodayMyIn.styled";
import MainBodyTodayTap from "../TodayMyTap";
import { loginState } from "../../../recoil/user";
import { useSetRecoilState } from "recoil";

function TodayMyIn() {
  const setLogState = useSetRecoilState(loginState);

  const logOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setLogState(false);
  }

  return (
    <div>
      <TodayMyTop>
        <div className='MainBody_Today_My_Top_logout'>
        <button onClick={logOut}>로그아웃</button></div>
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