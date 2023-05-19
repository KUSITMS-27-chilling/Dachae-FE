import { 
  CModalWrapper,
  CModalBackground,
  CModalContainer,
  CModalContent,
  CModalMy,
  CModalTotal,
  CenterBtnContainer,
  CenterBtn
} from "./CenterModal.styled";
import axios from 'axios';
import { useEffect, useState } from "react";

function CenterModal({ closeModal }: { closeModal: () => void }) {
  const seoulArr = ['강남구', '강동구', '강북구', '강서구', '관악구',
                      '광진구', '구로구', '금천구', '노원구', '도봉구',
                     '동대문구', '동작구', '마포구', '서대문구', '서초구',
                      '성동구', '성북구', '송파구', '양천구', '영등포구',
                      '용산구', '은평구', '종로구', '중구', '중랑구'];

  const [regions, setRegions] = useState([]);
  
  function getRegions() {
    const token = localStorage.getItem('access_token');

    if(token == null){
      console.log('The token is null.');
      return;
    }

    axios.get(`${import.meta.env.VITE_APP_HOST}/user/regions`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setRegions(res.data.data.regions);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getRegions();
  }, [])

  return(
    <CModalWrapper>
      <CModalBackground onClick={closeModal}>
        <CModalContainer>
          <CModalContent>
            <div id="center-modal__title">관심센터 수정하기</div>
            <CModalMy>
              <div id="center-modal__my-text">현재 나의 관심센터</div>
              <CenterBtnContainer>
                {
                  regions &&
                  regions.map((el, idx) => {
                    return <CenterBtn key={idx}>{el}</CenterBtn>
                  })
                }
              </CenterBtnContainer>
            </CModalMy>
            <CModalTotal>
              <div id="center-modal__total-text">관심센터 설정</div>
              <CenterBtnContainer>
                {
                  seoulArr &&
                  seoulArr.map((el, idx) => {
                    return <CenterBtn key={idx}>{el}</CenterBtn>
                  })
                }
              </CenterBtnContainer>
            </CModalTotal>
            <div id="center-modal__warning-text">관심센터는 최대 4개까지 설정할 수 있어요!</div>
          </CModalContent>
        </CModalContainer>
      </CModalBackground>
    </CModalWrapper>
  )
}

export default CenterModal;