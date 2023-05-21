import React from 'react'
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import { Category } from '../../types/tabCategory';
import { useNavigate } from 'react-router-dom';
import Plus from '../../assets/plus.png'
import {
  Content,
  MainBanner,
  SuggestPostBtnContainer,
  Stylebutton,
  TapTitle,
  SuggestListContainer
} from '../Suggest/SuggestPage.styled'
// import TeacherCard from '../../components/TeacherCard/MyTeacherCard';
 import SuggestList from '../../components/SuggestList/SuggestList';
 import SuggestRegion from '../../components/SuggestRegion/SuggestRegion';
import SuggestHeader from '../../components/SuggestHeader/SuggestHeader';
import SlideBanner from '../../components/SlideBanner';
import usePreparing from '../../hooks/usePreparing';
import Preparing from '../../components/Preparing';

function SuggestPage() {
  
  const navigate = useNavigate();
const goMypage =()=>{ //일단은 마이페이지로 해놓았음
  navigate("/mypage");
}
const { isPreparing, showPopup } = usePreparing();

  const category: Category = 'suggest';
  return (
    <div>
      {
        isPreparing && (
          <Preparing></Preparing>
        )
      }
      <Header showPopup={showPopup} />
      <TabBar prop={category} />
      <SlideBanner />
       <SuggestHeader/>
      <SuggestPostBtnContainer>
      <Stylebutton onClick={goMypage}>
        <img id='Suggest-post-btn__img' alt="write-img" src={Plus} />
        <div id='Suggest-post-btn__text'>나의 지식을 나누고 동네강사가 되어보세요!</div>
      </Stylebutton>
    </SuggestPostBtnContainer>
    <TapTitle>제안한 <div className='titlecolor'>프로그램</div> 목록</TapTitle>
    {/* <SuggestList/> */}
    <SuggestListContainer>
        <SuggestRegion/>
        <SuggestList/>
    </SuggestListContainer>
    
    </div>
  )
}

export default SuggestPage
