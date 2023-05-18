import React from 'react'
import { Category } from '../../types/tabCategory';
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import {
    HeaderImg,
    TeacherImg
} from '../../pages/TeacherDetail/TeacherDetailPage.styled'
import TeacherTabBar from '../../components/TeacherTap/TeacherTap';
function TeacherDetailPage() {
    const category: Category = 'suggest';
    
  return (
    <div>
      <Header/>
      <TabBar prop={category} />
      <HeaderImg>
        <img className='img1'></img>
        <img className='img2'></img>
      </HeaderImg>
      <TeacherTabBar/>
      <TeacherImg></TeacherImg>
      <Title>강사이력</Title>
      <Title>보유자격증</Title>
      <Title>수업기본정보</Title>
      <Title></Title>
    </div>
  )
}

export default TeacherDetailPage
