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

import Header from '../../components/Header/Header';
import ProgramCard from '../../components/ProgramCard';
import temp_program from '../../assets/temp_program.jpg';

function MainPage() {
    
    const navigate = useNavigate();
    const goLogin =()=>{
        navigate("/login");
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
            <ProgramCard 
              imgSrc={temp_program}
              title="2023 한걸음에 닿는 동네 배움터 [성북 나래] 프로그램 접수"
              btnClick={() => console.log('test')}
              deadline="~05/24(수)"
              ></ProgramCard>
          </MainBody_Today_New>
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
