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
          </CModalContent>
        </CModalContainer>
      </CModalBackground>
    </CModalWrapper>
  )
}

export default CenterModal;