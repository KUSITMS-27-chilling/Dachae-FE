import { 
  TodayFormContainer,
  TodayMyOutContainer,
  DividerContainer,
  TodayMyOutLogin
} from "./TodayMyOut.styled";
import naver_login from '../../../assets/naver_login.png';
import kakao_login from '../../../assets/kakao_login.png';
import { useState } from "react";
import axios from 'axios';
import { loginId, loginState } from "../../../recoil/user";
import { useSetRecoilState, useRecoilValue } from 'recoil';

function TodayMyOut({ showPopup }: { showPopup: () => void }) {
  const setUserId = useSetRecoilState(loginId);
  const setLoginState = useSetRecoilState(loginState);
  const userId = useRecoilValue(loginId);
  const [userPwd, setUserPwd] = useState('');
  
  const onClickLogin = () => {
    axios.post(`${import.meta.env.VITE_APP_HOST}/user/login`,
      {
        id: userId,
        password: userPwd
      }
    )
    .then((res)=>  {
        localStorage.setItem('access_token', res.data.data.accessToken);
        localStorage.setItem('refresh_token', res.data.data.refreshToken);
        setLoginState(true);
      }
    )
    .catch((err) => console.log(err))
  }

  return(
    <TodayMyOutContainer>
      <div id="today-my-out__login-text">로그인</div>
      <TodayFormContainer>
        <form id="today-my-out__login-form">
          <input type="text" 
                placeholder="아이디를 입력해주세요" 
                className="today-my-out__form"
                onChange={(e) => setUserId(e.target.value)} />
          <input type="password" 
                placeholder="비밀번호를 입력해주세요" 
                className="today-my-out__form"
                autoComplete="off"
                onChange={(e) => setUserPwd(e.target.value)} />
        </form>
      </TodayFormContainer>
      <button id="today-my-out__login-btn" onClick={onClickLogin}>로그인</button>
      <div id="today-my-out__register-btn" onClick={showPopup}>회원가입</div>
      <DividerContainer>
        <div id="today-my-out__line"></div>
        <div id="today-my-out__line-text">SNS 계정으로 로그인</div>
      </DividerContainer>
      <TodayMyOutLogin>
        <img src={naver_login} alt="naver-login"></img>
        <img src={kakao_login} alt="kakao-login"></img>
      </TodayMyOutLogin>
    </TodayMyOutContainer>
  )
}

export default TodayMyOut;