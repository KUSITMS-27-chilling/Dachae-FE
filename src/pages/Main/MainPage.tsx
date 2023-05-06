import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  MainBanner,
  MainBody_Today,
  MainBody_Tapbar,
  MainBody_Today_In,
} from "./MainPage.styled"
import MainBodyContent from '../../components/Main/MainBodyContent/MainBodyContent';
import Header from '../../components/Header/Header';
import CenterNews from '../../components/CenterNews';
import TodayMy from '../../components/Main/TodayMy/TodayMy';
import { LGData } from '../../types/centerNews';

function MainPage() {
  const lgData: LGData[] = [
    {
      region: '종로',
      programs: [
        {
          programTitle: '보태니컬 동양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },
        {
          programTitle: '명화 서양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },    
        {
          programTitle: '보태니컬 동양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },    
        {
          programTitle: '명화 서양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },    
        {
          programTitle: '보태니컬 동양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        }
      ]
    },
    {
      region: '성북',
      programs: [
        {
          programTitle: '명화 서양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },
        {
          programTitle: '보태니컬 동양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },    
        {
          programTitle: '명화 서양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },    
        {
          programTitle: '보태니컬 동양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        },    
        {
          programTitle: '명화 서양화 배우기',
          programPeriod: '2023. 04. 01 ~ 2023. 05. 21'
        }
      ]
    }
  ]
    
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
          <CenterNews lgData={lgData} ></CenterNews>

          <TodayMy></TodayMy>

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
      <MainBodyContent/>
      </>
    )
  }
  
  export default MainPage
