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
        모아보기/제인할래요
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
