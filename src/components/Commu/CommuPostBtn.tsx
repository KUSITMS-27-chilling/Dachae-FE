import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  CommuPostBtnContainer,
  Stylebutton
} from './CommuBest.styled'
import Write from '../../assets/Write.png'
import { CommuTabType } from '../../types/communityTab';

function CommuPostBtn({ btnKind } : { btnKind: CommuTabType }) {
  const navigate = useNavigate();
  const btnStr = {
    review: '나의 배움에 대해 작성해보세요!',
    together: '함께 배울 친구를 찾아보세요',
    freeBoard: '자유롭게 하고 싶은 말을 작성해보세요!'
  }

  const goMypage =()=>{ //일단은 마이페이지로 해놓았음
      navigate("/mypage");
  }
  
  return (
    <CommuPostBtnContainer>
      <Stylebutton onClick={goMypage}>
        <img id='commu-post-btn__img' alt="write-img" src={Write} />
        <div id='commu-post-btn__text'>{btnStr[btnKind]}</div>
      </Stylebutton>
    </CommuPostBtnContainer>
  )
}

export default CommuPostBtn
