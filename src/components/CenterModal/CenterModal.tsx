import { 
  CModalWrapper,
  CModalBackground,
  CModalContainer,
  CModalContent,
  CModalMy,
  CModalTotal,
  CenterBtnContainer,
  CenterBtn,
  ControlBtnContainer,
  ControlBtn
} from "./CenterModal.styled";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { favRegs } from "../../recoil/center";
import { useSetRecoilState } from "recoil";

function CenterModal({ closeModal }: { closeModal: () => void }) {
  const seoulArr = ['강남구', '강동구', '강북구', '강서구', '관악구',
                      '광진구', '구로구', '금천구', '노원구', '도봉구',
                     '동대문구', '동작구', '마포구', '서대문구', '서초구',
                      '성동구', '성북구', '송파구', '양천구', '영등포구',
                      '용산구', '은평구', '종로구', '중구', '중랑구'];
  const [myRegion, setMyRegion] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  const setFavRegs = useSetRecoilState(favRegs);
  
  async function getRegions() {
    const token = localStorage.getItem('access_token');

    if(token == null){
      console.log('The token is null.');
      return;
    }

    await axios.get(`${import.meta.env.VITE_APP_HOST}/user/regions`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setRegions(res.data.data.regions);
      setSelected(res.data.data.regions);
      setMyRegion(res.data.data.regions[0]);
    }).catch((err) => {
      console.log(err);
    })
  }

  function setSelected (rgs: string[]) {
    const totalArr = document.querySelectorAll('.center-modal__total-btn');

    totalArr.forEach((el) => {
      if(rgs.includes(el.innerHTML)){
        el.classList.add('selected');
      }
    })
  }

  function clickBtn (e:React.MouseEvent<HTMLButtonElement>) {
    const dataText = e.currentTarget.dataset.text!;
    if(dataText == myRegion) return;

    const warning = document.getElementById('center-modal__warning-text');
    warning!.style.visibility = 'hidden';

    if(e.currentTarget.classList.contains('selected')){
      let filtered = regions.filter(el => el !== dataText);
      e.currentTarget.classList.remove('selected');
      setRegions(filtered);
      return;
    }

    if(!e.currentTarget.classList.contains('selected')){
      if(!checkOverflow()){
        // e.currentTarget.classList.add('selected');
        setRegions(regions => [...regions, dataText]);
        return;
      }
      return;
    }
  }

  function checkOverflow() {
    if(regions.length > 3) {
      const warning = document.getElementById('center-modal__warning-text');
      warning!.style.visibility = 'visible';
      return true;
    }
    return false;
  }

  function clickSubmit() {
    const token = localStorage.getItem('access_token');

    let str = regions.join(',');
    str = str.slice(4);

    axios.put(`${import.meta.env.VITE_APP_HOST}/user/regions`,
    {
      favRegion: str,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      if(res.data.code == 200){
        setFavRegs(regions);
        closeModal();
        return;
      }
    })
  }

  useEffect(() => {
    getRegions();
  }, [])

  useEffect(() => {
    setSelected(regions);
  }, [regions])

  return(
    <CModalWrapper>
      <CModalBackground>
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
                  seoulArr.map((el, idx) => {
                    return <CenterBtn data-text={el} className="center-modal__total-btn" key={idx} onClick={(e) => clickBtn(e)}>{el}</CenterBtn>
                  })
                }
              </CenterBtnContainer>
            </CModalTotal>
            <div id="center-modal__warning-text">관심센터는 최대 4개까지 설정할 수 있어요!</div>
          </CModalContent>
          <ControlBtnContainer>
            <ControlBtn id="control-btn__cancel" onClick={closeModal}>취소</ControlBtn>
            <ControlBtn id="control-btn__confirm" onClick={clickSubmit}>확인</ControlBtn>
          </ControlBtnContainer>
        </CModalContainer>
      </CModalBackground>
    </CModalWrapper>
  )
}

export default CenterModal;