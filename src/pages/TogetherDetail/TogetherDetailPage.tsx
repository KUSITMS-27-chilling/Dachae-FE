import React from 'react'
import { useParams } from 'react-router-dom'
import TogetherDetail from '../../components/TogetherDetail/TogetherDetail'
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import { Category } from '../../types/tabCategory';
import CommuTab from '../../components/Commu/CommuTab';
import {
  MainBanner,
  ReviewDetailBox,
  Comment,
  CommentWrite
}from './TogetherDetailPage.styled'

function TogetherDetailPage() {
  const { listenIdx } = useParams();
  const category: Category = 'community';
  return (
    <div>
      <Header/>
      <TabBar prop={category} />
      <MainBanner />
      <CommuTab />
      <ReviewDetailBox>
      <TogetherDetail listenIdx ={Number(listenIdx)}/>
      </ReviewDetailBox>
      <Comment>댓글 
          <div className='num'>3</div>
      </Comment>
      <CommentWrite>
        <input type='text' placeholder='댓글을 남겨주세요'></input>
      </CommentWrite>
    </div>
  )
}

export default TogetherDetailPage
