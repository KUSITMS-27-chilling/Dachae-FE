import React from 'react'
import Review from '../../components/Review'
import { 
  MainBanner
} from "./CommunityPage.styled"
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import CommuBest from '../../components/Commu/CommuBest'
import CommuMyPost from '../../components/Commu/CommuMyPost'
import CommuPostBtn from '../../components/Commu/CommuPostBtn';
import CommuTab from '../../components/Commu/CommuTab';
import temp_program from "../../assets/temp_program.jpg";
import { Category } from '../../types/tabCategory';
import { detailOrCommu } from '../../types/review';

function CommunityPage() {
  const commu: detailOrCommu = 'community';
  const category: Category = 'community';

  return (
    <div>
      <>
      <Header>
      </Header>
      <TabBar prop={category} />
      <MainBanner />
      <CommuTab />
      </>
    </div>
  )
}

export default CommunityPage
