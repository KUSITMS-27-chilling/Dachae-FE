import React from 'react'
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import { Category } from '../../types/tabCategory';
import { useNavigate } from 'react-router-dom';
import Plus from '../../assets/plus.png'
import {
  Content,
  MainBanner,
  TodayTeacher,
  MyTeacher,
  TodayTitle,
  TodayCard,
  MyTeacherTitle,
  MyTeacherCard,
  SuggestPostBtnContainer,
  Stylebutton

} from '../Suggest/SuggestPage.styled'
import TeacherCard from '../../components/TeacherCard/TeacherCard';

function SuggestPage() {
  
  const navigate = useNavigate();
const goMypage =()=>{ //일단은 마이페이지로 해놓았음
  navigate("/mypage");
}
  const category: Category = 'suggest';
  return (
    <div>
      <Header />
      <TabBar prop={category} />
      <MainBanner />
      <Content>
        <TodayTeacher>
          <TodayTitle>오늘 등록한 동네강사</TodayTitle>
          <TodayCard>
            <TeacherCard/>
            {/* 강사 카드 넣어봤음 */}
          </TodayCard>
        </TodayTeacher>
        <MyTeacher>
        <MyTeacherTitle>내가 신청한 동네강사</MyTeacherTitle>
          <MyTeacherCard>
          <TeacherCard/>
          {/* 강사 카드 넣어봤음 */}
          </MyTeacherCard>
        </MyTeacher>
      </Content>
      <SuggestPostBtnContainer>
      <Stylebutton onClick={goMypage}>
        <img id='Suggest-post-btn__img' alt="write-img" src={Plus} />
        <div id='Suggest-post-btn__text'>나의 지식을 나누고 동네강사가 되어보세요!</div>
      </Stylebutton>
    </SuggestPostBtnContainer>

      {/* <TeacherCard/> */}
    </div>
  )
}

export default SuggestPage
