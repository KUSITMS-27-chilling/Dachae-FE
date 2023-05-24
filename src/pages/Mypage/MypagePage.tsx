import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import usePreparing from '../../hooks/usePreparing';
import Preparing from '../../components/Preparing';
import {
  Myinfo,
  My,
  MyWrite,
  Myapply,
  Info,
  Profile,
  User,
  Nickname,
  Grade,
  Category,
  FavField,
  Contentflex,
  Line,
  Contentflexgrade,
  Content,
  Contentflexuser
} from './Mypagepage.styled'
import Footer from '../../components/Footer';
import gradeImg from '../../assets/vane2.png'
import profile from '../../assets/user_prf.png'

interface Program {
  favFiled:string[];
  favRegion:string[];
  grade:number;
  nickName:string;
  profile:string;
}
interface Post {
  allTotal:number;
  freeTotal:number;
  listenTotal:number;
  reviewTotal:number;
  lectureTotal:number;
}
interface participants {
  participantTotal:number;
  applyLectureTotal:number;
}
function Mypage() {
  const { isPreparing, showPopup } = usePreparing();
  const category = 'mypage';
  const token = localStorage.getItem('access_token');
  const [UserData, setUserData] = useState<Program>();
  const [PostData, setPostData] = useState<Post>();
  const [participantsData, setparticipantsData] = useState<participants>();
  

  useEffect(() => {
    getUser();
  }, []);
const getUser=() =>{
    axios.get(`${import.meta.env.VITE_APP_HOST}/user/info`,
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((response) => {
      setUserData(response.data.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserPost();
  }, []);
const getUserPost=() =>{
    axios.get(`${import.meta.env.VITE_APP_HOST}/user/my-post`,
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((response) => {
      setPostData(response.data.data);
      console.log(response.data.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserparticipants();
  }, []);
const getUserparticipants=() =>{
    axios.get(`${import.meta.env.VITE_APP_HOST}/user/participants`,
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((response) => {
      setparticipantsData(response.data.data);
      console.log(response.data.data);
    })
    .catch((err) => console.log(err));
  }
  return (


    <div>
      {
        isPreparing && (
          <Preparing></Preparing>
        )
      }
      <Header showPopup={showPopup} />
      <TabBar prop={category} />
      <Myinfo>
        <div className='title'>내정보</div>
        <Info>
          <Profile img={UserData ? UserData.profile : ''}>
            <div className='user-img'>
              <img className='userimg'></img>
            </div>
            <div className='user-fix'>수정하기</div>
          </Profile>
          <User>
            <Nickname>
              <div className='flex'>
              <div className='user-name-title'>닉네임</div>
              <div className='user-name'>{UserData ? UserData.nickName : ''}</div>
              </div>
             <Contentflexuser>
                <div className='user-fix'>수정하기</div>
              </Contentflexuser>
            </Nickname>
            <Grade>
              <div className='user-grade'>채움등급</div>
              <div id="learning-grade__grade-top">
            <Contentflexgrade>
            <div id="learning-grade__progress-bar" ></div>
                  <div id="learning-grade__level-text">
                    <div id="learning-grade__low-level">다음 단계까지 글 4개 남았어요!</div>
                  </div>
                       
            </Contentflexgrade>
            </div>
            <div className='grade-img'>
            <img id="learning-grade__vane-img" src={gradeImg} alt="grade-img" />
            <div className='grade-text'>레벨 2</div>
            </div>
             
            </Grade>
            <Category>
              <div className='user-category'>활동분야</div>
             <Contentflex>
             {UserData?.favFiled.map((category, index) => (
            <div className='category' key={index}>
            #{category}
            </div>
            ))}
                <div className='user-fix'>수정하기</div>
              </Contentflex>
            </Category>
            <FavField>
              <div className='user-FavField'>관심센터</div>
              <Contentflex>
              {UserData?.favRegion.map((category, index) => (
            <div className='category' key={index}>
            {category}
            </div>
            ))}
                <div className='user-fix'>수정하기</div>
              </Contentflex>
            </FavField>
          </User>
        </Info>
      </Myinfo>
      <My>
      <MyWrite>
        <div className='mytitle'>내가 쓴 글</div>
        <Content>
        <div className='sub'>
          <div className='subtitle'>작성한 글 전체</div>
          <div className=''>{PostData ? PostData.allTotal:''}개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>내가 작성한 같이듣기</div>
          <div className=''>{PostData ? PostData.listenTotal:''}개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>내가 작성한 후기</div>
          <div className=''>{PostData ? PostData.reviewTotal:''}개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>내가 작성한 우리동네 강사</div>
          <div className=''>{PostData ? PostData.reviewTotal:''}개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>자유게시판</div>
          <div className=''>{PostData ? PostData.lectureTotal:''}개</div>
        </div>
        <Line></Line>
        </Content>
      </MyWrite>
      <Myapply>
      <div className='appplytitle'>내가 신청한 글</div>
      <Content>
      <div className='sub'>
          <div className='subtitle'>우리동네 강사 신청내역</div>
          <div className=''>{participantsData ? participantsData.applyLectureTotal:''}개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>같이듣기 신청내역</div>
          <div className=''>{participantsData ? participantsData.participantTotal:''}개</div>
        </div>
        <Line></Line>
      </Content>
      </Myapply>
      </My>
      <Footer />
    </div>
  )
}
  
export default Mypage
