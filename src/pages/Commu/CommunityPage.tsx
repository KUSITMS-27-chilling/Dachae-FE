import React from 'react'
import { useNavigate } from 'react-router-dom';
import { 
  MainBanner,
  MainBody_Tapbar
} from "./CommunityPage.styled"

import Header from '../../components/Header/Header';
import CommuBest from '../../components/Commu/CommuBest'
import CommuMyPost from '../../components/Commu/CommuMyPost'
import CommuPostBtn from '../../components/Commu/CommuPostBtn';
function CommunityPage() {

  const navigate = useNavigate();
  const goLogin =()=>{
      navigate("/login");
  }
  const goMain =()=>{ //모아보기
      navigate("/");
    }
  const goSuggest =()=>{ //제안할래요
      navigate("/suggest");
    }
  const goCommu =()=>{ //커뮤니티
      navigate("/commu");
    }
  const goMypage =()=>{ //마이페이지
      navigate("/mypage");
    }
  return (
    <div>
      <>
      <Header>
      </Header>
      <MainBody_Tapbar>
      <div className='MainBody_Tapbar_In'>
        <button onClick={goMain}>모아보기</button>
        <button onClick={goSuggest}>제안할래요</button>
        <button onClick={goCommu}>커뮤니티</button>
        <button onClick={goMypage}>마이페이지</button>
      </div>
      </MainBody_Tapbar>
      <MainBanner>
        배너
      </MainBanner>
      {/* <CommuBest/> */}
      {/* <CommuMyPost/> */}
      {/* <CommuPostBtn/> */}
      </>
    </div>
  )
}

export default CommunityPage
