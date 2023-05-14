import React from 'react'
import Review from '../../components/Review'
import { 
  MainBanner
} from "./CommunityPage.styled"
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import CommuTab from '../../components/Commu/CommuTab';
import CommuHeader from '../../components/Commu/CommuHeader';
import CommuList from '../../components/Commu/CommuList';
import { Category } from '../../types/tabCategory';
import { detailOrCommu } from '../../types/review';

function CommunityPage() {
  const commu: detailOrCommu = 'community';
  const category: Category = 'community';

  return (
    <div>
      <>
      <Header/>
      <TabBar prop={category} />
      <MainBanner />
      <CommuTab />
      <CommuHeader />
      <CommuList />
      </>
    </div>
  )
}

export default CommunityPage
