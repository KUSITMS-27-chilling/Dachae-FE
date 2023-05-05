import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Stylebutton

} from './CommuBest.styled'
import Write from '../../assets/Write.png'

function CommuPostBtn() {
    const navigate = useNavigate();

    const goMypage =()=>{ //일단은 마이페이지로 해놓았음
        navigate("/mypage");
      }
  return (
    <div>
              <Stylebutton onClick={goMypage}>
              <img className="Write" alt="1" src={Write} />
                나의 배움에 대해 작성해보세요!
              </Stylebutton>
       
    </div>
  )
}

export default CommuPostBtn
