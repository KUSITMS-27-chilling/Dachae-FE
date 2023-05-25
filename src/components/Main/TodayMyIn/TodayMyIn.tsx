import { 
  TodayMyTop,
  TodayTapBox,
  TodayBottom
} from "../TodayMyIn/TodayMyIn.styled";
import MiniProfile from "../../MiniProfile";
import { loginState, userGrade } from "../../../recoil/user";
import { useSetRecoilState } from "recoil";
import profile_icon_light from '../../../assets/profile_icon_light.png';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TodayMyIn({ showPopup }: { showPopup: () => void }) {
  const setLogState = useSetRecoilState(loginState);
  const setUserGrade = useSetRecoilState(userGrade);
  const [favField, setFavField] = useState([]);
  const [userNick, setUserNick] = useState('');
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setLogState(false);
  }

  async function getLgInfo(){
    const token = localStorage.getItem('access_token');
    if(token == null) return;

    await axios.get(`${import.meta.env.VITE_APP_HOST}/user/grade`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      const res = response.data.data;
      setFavField(res.favField);
      setUserGrade(res.grade);
      setUserNick(res.nickName);
    }).catch((err) => console.log(err));
  }

  function goMyPage() {
    navigate('/mypage');
  }

  useEffect(() => {
    getLgInfo();
  }, [])


  return (
    <div>
      <TodayMyTop>
        <div id="today-my-top__profile-box">
          <img id="today-my-top__profile-img" src={profile_icon_light} alt="profile-icon" />
          <div id="today-my-top__profile-name">{userNick}</div>
        </div>
        <button id="today-my-top__logout-btn" onClick={logOut}>로그아웃</button>
      </TodayMyTop>
      <MiniProfile favField={favField} />
      <TodayBottom>
        <div className='TapBtn'>
          <button onClick={goMyPage}>마이페이지 바로가기</button>
        </div>
      </TodayBottom>
    </div>
  )
}

export default TodayMyIn;