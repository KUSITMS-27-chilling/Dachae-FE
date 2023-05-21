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
import usePreparing from '../../hooks/usePreparing';
import Preparing from '../../components/Preparing';

const RevieDetailPage =() => {
    const { reviewIdx } = useParams();
    const category: Category = 'community';
    const { isPreparing, showPopup } = usePreparing();

  return (
    <div>
        {
          isPreparing && (
            <Preparing></Preparing>
          )
        }
      <Header showPopup={showPopup} />
      <TabBar prop={category} />
      <MainBanner />
      <CommuTab thisCommu='review' />
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
