import React from 'react'
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import { Category } from '../../types/tabCategory';
import MainBanner from '../../components/MainBanner';
import SlideBanner from '../../components/SlideBanner';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

function SuggestPage() {
  const category: Category = 'suggest';
  return (
    <div>
      <Header />
      <TabBar prop={category} />
      <SlideBanner />
      <TeacherCard/>
    </div>
  )
}

export default SuggestPage
