import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  CommuPostBtnContainer,
  Stylebutton
} from './CommuBest.styled'
import Write from '../../assets/Write.png'
import { CommuTabType } from '../../types/communityTab';
import Modal from "../Modal/Modal";
import { ModalBg } from '../DetailTabBar/DetailTabBar.styled';
import { useState, useRef } from 'react';
import axios from 'axios';

function CommuPostBtn({ btnKind } : { btnKind: CommuTabType }) {
  const navigate = useNavigate();
  const btnStr = {
    review: '나의 배움에 대해 작성해보세요!',
    together: '함께 배울 친구를 찾아보세요',
    freeBoard: '자유롭게 하고 싶은 말을 작성해보세요!'
  }
  const [modal, setModal] = useState(false);
  const outside = useRef(null);
  const [region, setRegion] = useState('강남구');

  const goMypage =()=>{ //일단은 마이페이지로 해놓았음
      navigate("/mypage");
  }

  function getResidence (token: string) {
    axios.get(`${import.meta.env.VITE_APP_HOST}/user/region`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setRegion(res.data.data.region);
    }).catch((err) => console.error(err))
  }

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if(token !== null) getResidence(token);
  }, []);

  const handleCloseModal = () => {
    setModal(false);
  };
  
  return (
    <CommuPostBtnContainer>
      <Stylebutton onClick={() => setModal(true)}>
        <img id='commu-post-btn__img' alt="write-img" src={Write} />
        <div id='commu-post-btn__text'>{btnStr[btnKind]}</div>
      </Stylebutton>
      { modal &&( 
          <ModalBg 
            ref={outside} 
            onClick={ (e) => { if(e.target === outside.current) setModal(false) } }
          >
            <Modal region = {region as string} handleCloseModal={handleCloseModal}/>
          </ModalBg>
      )}
    </CommuPostBtnContainer>
  )
}

export default CommuPostBtn
