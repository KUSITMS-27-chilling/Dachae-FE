import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  MainBanner,
  MainBody_Today,
  MainBody_Tapbar,
  MainBody_Select,
  MainBody_Content,
  MainBody_Today_In,
  MainBody_Today_New,
  MainBody_Today_My,
  MainBody_Today_My_Top,
  MainBodyTodayTap1,
  MainBody_Today_My_Bottom
} from "./MainPage.styled"
import MainBodyContent from '../../components/Main/MainBodyContent';
import Header from '../../components/Header/Header';
import CenterNews from '../../components/CenterNews';
import ProgramCard from '../../components/ProgramCard';
import temp_program from '../../assets/temp_program.jpg';
import {MainBodyTodayTap} from '../../components/Main/MainBodyTodayTap';

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
          {/* <MainBody_Today_New>
          </MainBody_Today_New> */}
          <CenterNews></CenterNews>

          <MainBody_Today_My>
            <MainBody_Today_My_Top>프로필 , 로그아웃</MainBody_Today_My_Top>
            
            <MainBodyTodayTap1> 
               <MainBodyTodayTap/>
              {/* 탭바 컴포넌트로 만듦 */}
            </MainBodyTodayTap1>

            <MainBody_Today_My_Bottom>
              <div className='TapBtn'>
                <button onClick={goMypage}>마이페이지 바로가기</button>
              </div>
            </MainBody_Today_My_Bottom>

          </MainBody_Today_My>
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
