import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar';
import DetailContent from '../../components/DetailContent';
import usePreparing from '../../hooks/usePreparing';
import Preparing from '../../components/Preparing';

import{
  MainBody_Content_Header,
  MainBody_Content_title,
  MainBody_Content_detail,
  MainBody_Card,
  Mainbody_CardContent,
  Main_Program,
  Main_Program_Title,
  Main_Program_content,
} from '../Main/MainPageDetail.styled'
import detail_icon1 from '../../assets/detail_icon1.png';
import detail_icon2 from '../../assets/detail_icon2.png';
import detail_icon3 from '../../assets/detail_icon3.png';
import MainDetailProgram from '../../components/MainDetailProgram/MainDetailProgram';
import axios from 'axios';
import Footer from '../../components/Footer';

const MainPageDetail = () =>{
  const { region } = useParams();
  const { isPreparing, showPopup } = usePreparing();
  const [favCount, setFavCount] = useState(0);
  const [telephone, setTelephone] = useState('');
  const [url, setUrl] = useState('');

  function getBtnInfo() {
    axios.get(`${import.meta.env.VITE_APP_HOST}/center/${region}/info`,{
      params: {
        region: region
      }
    }).then((response) => {
      const res = response.data.data;
      setFavCount(res.favCount);
      setTelephone(res.tell);
      setUrl(res.url);
    }).catch((err) => console.error(err));
  }

  function showTelephone() {
    const telephone = document.querySelector('.program-detail__telephone-number');

    if(telephone?.classList.contains('active')) {
      telephone!.classList.remove('active');
      return;
    }

    if(!(telephone?.classList.contains('active'))) {
      telephone!.classList.add('active');
      return;
    }
  }

  useEffect(() => {
    getBtnInfo();
  }, [])

  return (
    <div>
      {
        isPreparing && (
          <Preparing></Preparing>
        )
      }
      <Header showPopup={showPopup} />
      <TabBar />
      <MainBody_Content_Header>
        <MainBody_Content_title>{region} 동네배움터</MainBody_Content_title>
        <MainBody_Content_detail>
            <div id='center-news__header--setting-text' onClick={() => window.open(url, "_blank")}>바로가기</div>
        </MainBody_Content_detail>
        <div className='program-detail__telephone-number'>{telephone}</div>
      </MainBody_Content_Header>
      
      <MainBody_Card>
        <Mainbody_CardContent>
          <img id="program-detail__btn1" alt="detail-icon1" src={detail_icon1} />
          <div className='Card'>
            <div className='Card-title'>
              {favCount}명
            </div>
            <div className='Card-content'>
              {region} 동네배움터를 이용하는 <br /> 다채 회원 수 입니다.
            </div>
          </div>
        </Mainbody_CardContent>
        <Mainbody_CardContent onClick={showPopup}>
          <img id="program-detail__btn2" alt="detail-icon2" src={detail_icon2} />
          <div className='Card'>
            <div className='Card-title'>
              지도보기
            </div>
            <div className='Card-content'>
              자세한 배움터 위치를 <br /> 확인해보세요.
            </div>
          </div>
        </Mainbody_CardContent>
        <Mainbody_CardContent onClick={showTelephone}>
          <img id="program-detail__btn3" alt="detail-icon3" src={detail_icon3} />
          <div className='Card'>
            <div className='Card-title'>
              배움터 연락하기
            </div>
            <div className='Card-content'>
              해결되지 않는 궁금증이 있다면 <br /> 전화를 이용해 보세요.
            </div>
        </div>
        </Mainbody_CardContent>
      </MainBody_Card>

      <Main_Program>
        <Main_Program_Title>
          <div className='color'>{region}</div>에서 모집 중인 프로그램
        </Main_Program_Title>
        <Main_Program_content>
          <MainDetailProgram region = {region as string}/>
        </Main_Program_content>
      </Main_Program>
      <DetailContent />
      <Footer />
    </div>
  )
}

export default MainPageDetail
