import React from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    
    MainBody_Content,
    MainBody_Content_title,
    MainBody_Content_title1,
    MainBody_Content_People,
    MainBody_Content_detail,
    MainBody_Content_Btn,
    MainBody_Content_Program,
    MainBody_Content_Program_Title,
    MainBody_Content_Program_Content
   
  } from "../../pages/Main/MainPage.styled"
import img from '../../assets/Vector.png'
import img1 from '../../assets/Vector1.png'
import img2 from '../../assets/Vector2.png'
import temp_program from '../../assets/temp_program.jpg';
import ProgramCard from '../ProgramCard';

function MainBodyContent() {
    const navigate = useNavigate();
    const goMainDetail =()=>{
        navigate("/mainDetail");
      }
      
  return (
    <>
    <MainBody_Content>
        <MainBody_Content_title>
            <MainBody_Content_title1>성북구 동네배움터</MainBody_Content_title1>
            <MainBody_Content_People>365명이 함께 하고 있어요</MainBody_Content_People>
            <MainBody_Content_detail>
                <div id='center-news__header--setting-text' onClick={goMainDetail}>상세보기</div>
                <div id='center-news__header--setting-btn'>&gt;</div>
            </MainBody_Content_detail>
        </MainBody_Content_title>
        <MainBody_Content_Btn>
        <div className='Content_Btn_3' onClick={goMainDetail}>
            <img className="Btn_3" alt="1" src={img} />
            함께 배울 모임 만들기
        </div>
        <div className='Content_Btn_2' onClick={goMainDetail}>
            <img className="Btn_3" alt="1" src={img1} />
            프로그램 참여기록 공유하기</div>
        <div className='Content_Btn_3' onClick={goMainDetail}>
            <img className="Btn_3" alt="1" src={img2} />
            프로그램 제안하기</div>
        </MainBody_Content_Btn>
        <MainBody_Content_Program>
            <MainBody_Content_Program_Title>성북구에서 모집중인 프로그램</MainBody_Content_Program_Title>
            <MainBody_Content_Program_Content>
                <ProgramCard 
                    imgSrc={temp_program}
                    title="2023 한걸음에 닿는 동네 배움터 [성북 나래] 프로그램 접수"
                    btnClick={() => console.log('test')}
                    deadline="~05/24(수)"
                ></ProgramCard>
                <ProgramCard 
                    imgSrc={temp_program}
                    title="2023 한걸음에 닿는 동네 배움터 [성북 나래] 프로그램 접수"
                    btnClick={() => console.log('test')}
                    deadline="~05/24(수)"
                ></ProgramCard>
                <ProgramCard 
                    imgSrc={temp_program}
                    title="2023 한걸음에 닿는 동네 배움터 [성북 나래] 프로그램 접수"
                    btnClick={() => console.log('test')}
                    deadline="~05/24(수)"
                ></ProgramCard>
            </MainBody_Content_Program_Content>
        </MainBody_Content_Program>
    </MainBody_Content>
    </>
  )
}

export default MainBodyContent
