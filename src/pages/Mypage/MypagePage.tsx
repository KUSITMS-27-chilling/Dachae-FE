import React from 'react'
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

function Mypage() {
  const { isPreparing, showPopup } = usePreparing();
  const category = 'mypage';
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
          <Profile>
            <div className='user-img' >
              <img className='userimg'src={profile} alt="user-img"></img>
            </div>
            <div className='user-fix'>수정하기</div>
          </Profile>
          <User>
            <Nickname>
              <div className='user-name-title'>닉네임</div>
             <Contentflexuser>
                <div className='user-name'>다채고수</div>
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
                <div className='category'>#언어</div>
                <div className='category'>#영어</div>
                <div className='category'>#등산</div>
                <div className='category'>#취미</div>
                <div className='user-fix'>수정하기</div>
              </Contentflex>
            </Category>
            <FavField>
              <div className='user-FavField'>관심센터</div>
              <Contentflex>
                <div className='category'>성북구 동네 배움터</div>
                <div className='category'>광진구 동네 배움터</div>
                <div className='category'>종로구 동네 배움터</div>
                <div className='category'>강북구 동네 배움터</div>
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
          <div className=''>56개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>내가 작성한 같이듣기</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>내가 작성한 후기</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>내가 작성한 우리동네 강사</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>자유게시판</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
        </Content>
      </MyWrite>
      <Myapply>
      <div className='appplytitle'>내가 신청한 글</div>
      <Content>
      <div className='sub'>
          <div className='subtitle'>우리동네 강사 신청내역</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
        <div className='sub'>
          <div className='subtitle'>같이듣기 신청내역</div>
          <div className=''>56개</div>
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
