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
  Line
} from './Mypagepage.styled'
import Footer from '../../components/Footer';

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
            <div className='user-img'></div>
          </Profile>
          <User>
            <Nickname>
              <div className='user-name-title'>닉네임</div>
             <Contentflex>
                <div className='user-name'>다채고수</div>
                <div className='user-fix'>수정하기</div>
              </Contentflex>
            </Nickname>
            <Grade>
              <div className='user-grade'>채움등급</div>
            </Grade>
            <Category>
              <div className='user-category'>활동분야</div>
             <Contentflex>
                <div className='category'>#언어</div>
                <div className='user-fix'>수정하기</div>
              </Contentflex>
            </Category>
            <FavField>
              <div className='user-FavField'>관심센터</div>
              <Contentflex>
                <div className='category'>성북구 동네 배움터</div>
                <div className='user-fix'>수정하기</div>
              </Contentflex>
            </FavField>
          </User>
        </Info>
      </Myinfo>
      <My>
      <MyWrite>
        <div className='mytitle'>내가 쓴 글</div>
        <div className='sub'>
          <div className='subtitle'>작성한 글 전체</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
      </MyWrite>
      <Myapply>
      <div className='appplytitle'>내가 신청한 글</div>
      <div className='sub'>
          <div className='subtitle'>작성한 글 전체</div>
          <div className=''>56개</div>
        </div>
        <Line></Line>
      </Myapply>
      </My>
      <Footer />
    </div>
  )
}
  
export default Mypage
