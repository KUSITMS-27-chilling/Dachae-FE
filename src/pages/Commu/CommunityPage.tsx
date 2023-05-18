import React from 'react'
import { 
  MainBanner
} from "./CommunityPage.styled"
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import CommuTab from '../../components/Commu/CommuTab';
import CommuHeader from '../../components/Commu/CommuHeader';
import CommuList from '../../components/Commu/CommuList';
import { Category } from '../../types/tabCategory';
import { commuTabKind } from '../../recoil/community';
import { useRecoilValue } from 'recoil';

function CommunityPage() {
  const category: Category = 'community';
  const commuTab = useRecoilValue(commuTabKind);

  return (
    <div>
      <>
      <Header/>
      <TabBar prop={category} />
      <MainBanner />
      <CommuTab thisCommu={commuTab} />
      <CommuHeader />
      <CommuList />
      </>
    </div>
  )
}

export default CommunityPage
