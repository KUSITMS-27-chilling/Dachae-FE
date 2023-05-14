import React from 'react'
import ReviewDetail from '../../components/ReviewDetail/ReviewDetail'
import { useNavigate, useParams } from 'react-router-dom';
import TabBar from '../../components/TabBar';
import Header from '../../components/Header/Header';
import { Category } from '../../types/tabCategory';
import CommuTab from '../../components/Commu/CommuTab';
import{
  MainBanner,
  ReviewDetailBox,
  Comment,
  CommentWrite
} from './ReviewDetailPage.styled'

const RevieDetailPage =() => {
    const { reviewIdx } = useParams();
    console.log(reviewIdx);
    const category: Category = 'community';
  return (
    <div>
      <Header/>
      <TabBar prop={category} />
      <MainBanner />
      <CommuTab />
      <ReviewDetailBox>
        <ReviewDetail reviewIdx ={Number(reviewIdx)}/>
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

export default RevieDetailPage
