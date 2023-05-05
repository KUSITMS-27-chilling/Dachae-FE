import React from 'react'
import Review from '../../components/Review'
import { useNavigate } from 'react-router-dom';
import { 
  MainBanner,
  MainBody_Tapbar
} from "./CommunityPage.styled"
import Header from '../../components/Header/Header';
import CommuBest from '../../components/Commu/CommuBest'
import CommuMyPost from '../../components/Commu/CommuMyPost'
import CommuPostBtn from '../../components/Commu/CommuPostBtn';
import temp_program from "../../assets/temp_program.jpg";

function CommunityPage() {
  const reviewData = {
    userNick: '다채 고수',
    time: '18시간 전',
    title: '[1주차 후기] 강의 들은 후기입니다 (제목자리)',
    lecture: '신박한 정리를 위한 미니멀리즘(강의명)',
    content: `가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
    가 나 다 가 나 다 가 나 다 가 나`,
    region: '은평구',
    detailPlace: '봉산아래공동체주택동네배움터',
    reviewImg: [
      temp_program,
      temp_program,
      temp_program
    ]
  }


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
      {/* <CommuBest/>
      <CommuMyPost/>
      <CommuPostBtn/> */}
      <Review props={reviewData} ></Review>
      </>
    </div>
  )
}

export default CommunityPage
