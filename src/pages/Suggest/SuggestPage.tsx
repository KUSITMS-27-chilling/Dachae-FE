import React from 'react'
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import { Category } from '../../types/tabCategory';
import MainBanner from '../../components/MainBanner';
import SlideBanner from '../../components/SlideBanner';
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
      <SlideBanner />
      <TeacherCard/>
    </div>
  )
}

export default SuggestPage
