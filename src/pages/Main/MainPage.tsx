import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  MainBanner,
  MainBody_Today,
  MainBody_Tapbar,
  MainBody_Select,
  MainBody_Content,
  MainBody_Today_In,
  MainBody_Today_New
} from "./MainPage.styled"
import MainBodyContent from '../../components/Main/MainBodyContent';
import Header from '../../components/Header/Header';
import ProgramCard from '../../components/ProgramCard';
import temp_program from '../../assets/temp_program.jpg';

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
      <Header>
      </Header>
      <MainBanner>
        배너
      </MainBanner>
      <MainBody_Today> 
  
        <MainBody_Today_In>
          <MainBody_Today_New>
          </MainBody_Today_New>
        </MainBody_Today_In>
        
      </MainBody_Today>
      <MainBody_Tapbar>
      <div className='MainBody_Tapbar_In'>
        <button onClick={goMain}>모아보기</button>
        <button onClick={goSuggest}>제안할래요</button>
        <button onClick={goCommu}>커뮤니티</button>
        <button onClick={goMypage}>마이페이지</button>
      </div>
      </MainBody_Tapbar>
      {/* <MainBody_Select>
        전체/배움터/일자리
      </MainBody_Select> */}
      <MainBodyContent/>
      </>
    )
  }
  
  export default MainPage
