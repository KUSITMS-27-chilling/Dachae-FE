import React from 'react'
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import { Category } from '../../types/tabCategory';
import {
  MainBanner,

} from '../Suggest/SuggestPage.styled'
import TeacherCard from '../../components/TeacherCard/TeacherCard';

function SuggestPage() {
  const category: Category = 'suggest';
  return (
    <div>
      <Header />
      <TabBar prop={category} />
      <MainBanner />
      <TeacherCard/>
    </div>
  )
}

export default SuggestPage
