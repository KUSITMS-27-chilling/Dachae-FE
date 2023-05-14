import React from 'react'
import ReviewDetail from '../../components/ReviewDetail/ReviewDetail'
import { useNavigate, useParams } from 'react-router-dom';

const RevieDetailPage =() => {
    const { reviewIdx } = useParams();
    console.log(reviewIdx);
  return (
    <div>
      <ReviewDetail reviewIdx ={Number(reviewIdx)}/>
    </div>
  )
}

export default RevieDetailPage
