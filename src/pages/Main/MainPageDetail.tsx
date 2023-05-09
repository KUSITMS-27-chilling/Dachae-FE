import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import  Dropdown ,{ Option }from 'react-dropdown';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import DetailTabBar from '../../components/DetailTabBar';

import{
  ModalBg,
  ModalBtn,
  MainBody_Tapbar,
  MainBody_Content_title,
  MainBody_Content_title1,
  MainBody_Content_detail,
  MainBody_Card,
  Mainbody_CardContent,

} from '../Main/MainPageDetail.styled'
import img from '../../assets/Vector.png'
import img2 from '../../assets/map.png'
import img3 from '../../assets/phone.png'

const MainPageDetail = () =>{
  const navigate = useNavigate();
  const goMainDetail =()=>{
      navigate("/mainDetail");
    }

  const [modal, setModal] = useState(false);
  const outside = useRef(null);

  return (
    <div>
      <Header>
      </Header>
      <TabBar />
      <MainBody_Content_title>
            <MainBody_Content_title1>성북구 동네배움터</MainBody_Content_title1>
            <MainBody_Content_detail>
                <div id='center-news__header--setting-text' onClick={goMainDetail}>바로가기</div>
            </MainBody_Content_detail>
        </MainBody_Content_title>
        <MainBody_Card>
          <Mainbody_CardContent onClick={goMainDetail}>
            <img className="Btn_3" alt="1" src={img} />
            <div className='Card'>
            <div className='Card-title'>
              365명
            </div>
            <div className='Card-content'>
              성북구 동네 배움터를 이용하는<br/>
              친구를 만나보세요
            </div>
					</div>
          </Mainbody_CardContent>
          <Mainbody_CardContent onClick={goMainDetail}>
          <img className="Btn_3" alt="1" src={img2} />
            <div className='Card'>
            <div className='Card-title'>
              지도보기
            </div>
            <div className='Card-content'>
              성북구 동네 배움터를 이용하는<br/>
              친구를 만나보세요
            </div>
					</div>
          </Mainbody_CardContent>
          <Mainbody_CardContent>
          <img className="Btn_3" alt="1" src={img3} />
            <div className='Card'>
            <div className='Card-title'>
              배움터 연락하기
            </div>
            <div className='Card-content'>
              성북구 동네 배움터를 이용하는<br/>
              친구를 만나보세요
            </div>
					</div>
          </Mainbody_CardContent>
        </MainBody_Card>
      <ModalBtn onClick={ () => setModal(true) }>글쓰기</ModalBtn>
      {
        modal &&
        <ModalBg 
          ref={outside} 
          onClick={ (e) => { if(e.target === outside.current) setModal(false) } }
        >
          <Modal/>
      </ModalBg>
      }
      <DetailTabBar />
    </div>
  )
}

export default MainPageDetail
