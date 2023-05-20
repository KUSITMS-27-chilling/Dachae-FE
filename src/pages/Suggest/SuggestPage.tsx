import React from 'react'
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import { Category } from '../../types/tabCategory';
import MainBanner from '../../components/MainBanner';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

function SuggestPage() {
  const category: Category = 'suggest';
  return (
    <div>
      <Header />
      <TabBar prop={category} />
      <MainBanner bannerType='teacherBanner' />
      <TeacherCard/>
    </div>
  )
}

export default SuggestPage
