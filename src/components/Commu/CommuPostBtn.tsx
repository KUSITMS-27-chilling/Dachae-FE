import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  CommuPostBtnContainer,
  Stylebutton
} from './CommuBest.styled'
import Write from '../../assets/Write.png'

function CommuPostBtn() {
  const navigate = useNavigate();

  const goMypage =()=>{ //일단은 마이페이지로 해놓았음
      navigate("/mypage");
  }
  
  return (
    <CommuPostBtnContainer>
      <Stylebutton onClick={goMypage}>
        <img id='commu-post-btn__img' alt="write-img" src={Write} />
        <div id='commu-post-btn__text'>함께 배울 친구를 찾아보세요!</div>
      </Stylebutton>
    </CommuPostBtnContainer>
  )
}

export default CommuPostBtn
