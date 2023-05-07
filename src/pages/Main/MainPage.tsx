import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  MainBanner,
  MainMiddle,
  MainBody_Today,
  MainBody_Tapbar,
  MainBody_Today_In,
} from "./MainPage.styled"
import MainBodyContent from '../../components/Main/MainBodyContent/MainBodyContent';
import Header from '../../components/Header/Header';
import CenterNews from '../../components/CenterNews';
import TodayMy from '../../components/Main/TodayMy';
import TabBar from '../../components/TabBar';
import { LGData } from '../../types/centerNews';
import axios from 'axios';
import map_marker from '../../assets/map-marker-radius.png';
import { loginState } from '../../recoil/user';
import { useRecoilValue } from 'recoil';

function MainPage() {
  const state = useRecoilValue(loginState);

  axios.get(`${import.meta.env.VITE_APP_HOST}/program`)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {console.log(err)});

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
        <Header />
        <MainBanner />
        <MainBody_Today> 
    
          <MainBody_Today_In>
            <CenterNews lgData={lgData} />
            <TodayMy />
          </MainBody_Today_In>
          
        </MainBody_Today>

        <TabBar />

        {
          !state &&
          <MainMiddle>
            <div id='main__middle-rect'>
              <img src={map_marker} alt="map-marker" />
              <div id='main__middle-text'>다채에서 많은 분들이 지정해두신 관심 센터를 추천해드려요 !</div>
            </div>
          </MainMiddle>
        }
        
        <MainBodyContent/>
      </>
    )
  }
  
  export default MainPage
