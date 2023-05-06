import { 
  TodayFormContainer,
  TodayMyOutContainer,
  DividerContainer,
  TodayMyOutLogin
} from "./TodayMyOut.styled";
import naver_login from '../../../assets/naver_login.png';
import kakao_login from '../../../assets/kakao_login.png';
import blind from '../../../assets/blind.png';

function TodayMyOut() {
  return(
    <TodayMyOutContainer>
      <div id="today-my-out__login-text">로그인</div>
      <TodayFormContainer>
        <input type="text" placeholder="아이디를 입력해주세요" className="today-my-out__form" />
        <input type="password" placeholder="비밀번호를 입력해주세요" className="today-my-out__form" />
      </TodayFormContainer>
      <button id="today-my-out__login-btn">로그인</button>
      <div id="today-my-out__register-btn">회원가입</div>
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