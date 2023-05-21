import { 
  TodayMyTop,
  TodayTapBox,
  TodayBottom
} from "../TodayMyIn/TodayMyIn.styled";
import MainBodyTodayTap from "../TodayMyTap";
import MiniProfile from "../../MiniProfile";
import { loginState } from "../../../recoil/user";
import { useSetRecoilState } from "recoil";
import profile_icon_light from '../../../assets/profile_icon_light.png';

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
        <div id="today-my-top__profile-box">
          <img id="today-my-top__profile-img" src={profile_icon_light} alt="profile-icon" />
          <div id="today-my-top__profile-name">당근 고수</div>
        </div>
        <button id="today-my-top__logout-btn" onClick={logOut}>로그아웃</button>
      </TodayMyTop>
      <MiniProfile />
      <TodayBottom>
        <div className='TapBtn'>
          <button>마이페이지 바로가기</button>
        </div>
      </TodayBottom>
    </div>
  )
}

export default TodayMyIn;