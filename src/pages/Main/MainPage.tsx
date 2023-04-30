import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  MainHeader,
  MainBanner,
  MainBody_Today,
  MainBody_Tapbar,
  MainBody_Select,
  MainBody_Content,
  MainBody_Today_In,
  MainBody_Today_New
} from "./MainPage.styled"


function MainPage() {
    
    const navigate = useNavigate();
    const goLogin =()=>{
        navigate("/login");
      }
    const goMain =()=>{ //모아보기
        navigate("/");
      }
    const goSuggest =()=>{ //제안할래요
        navigate("/suggest");
      }
    const goCommu =()=>{ //커뮤니티
        navigate("/commu");
      }
    const goMypage =()=>{ //마이페이지
        navigate("/mypage");
      }

    return (
      <>
      <MainHeader>
        메인페이지 헤더
        <button onClick={goLogin}>go to login</button>
      </MainHeader>
      <MainBanner>
        배너
      </MainBanner>
      <MainBody_Today> 
  
        <MainBody_Today_In>
          <MainBody_Today_New></MainBody_Today_New>
        </MainBody_Today_In>
        
      </MainBody_Today>
      <MainBody_Tapbar>
      <button onClick={goMain}>모아보기</button>
      <button onClick={goSuggest}>제안할래요</button>
      <button onClick={goCommu}>커뮤니티</button>
      <button onClick={goMypage}>마이페이지</button>
      </MainBody_Tapbar>
      <MainBody_Select>
        전체/배움터/일자리
      </MainBody_Select>
      <MainBody_Content>
        찐내용
      </MainBody_Content>
      </>
    )
  }
  
  export default MainPage
