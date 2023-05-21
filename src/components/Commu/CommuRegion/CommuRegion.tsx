import { 
  CommuRegionContainer,
  CommuRegionBtnBox,
  CommuSearchBox
} from "./CommuRegion.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { loginState } from "../../../recoil/user";
import { commuRegions, selectedRegion } from "../../../recoil/community";
import { useRecoilValue, useSetRecoilState } from "recoil";
import search_icon from '../../../assets/search_icon.png';

function CommuRegion () {
  const state = useRecoilValue(loginState);
  const regions = useRecoilValue(commuRegions);
  const setRegions = useSetRecoilState(commuRegions);
  const setSelectedRegion = useSetRecoilState(selectedRegion);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if(token) {
      getRegionsLogIn(token);
      return;
    }

    if(!token) {
      getRegions();
      return;
    }

  }, [state])

  // 로그인 X일 때
  function getRegions() {
    axios.get(`${import.meta.env.VITE_APP_HOST}/user/regions`)
    .then((response) => {
      setRegions(response.data.data.regions);
    })
    .catch((err) => console.log(err))
  }

  // 로그인 O일 때
  function getRegionsLogIn(token: string) {
    axios.get(`${import.meta.env.VITE_APP_HOST}/user/regions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setRegions(response.data.data.regions);
    })
    .catch((err) => console.log(err))
  }

  function clickRegion (e: React.MouseEvent<HTMLDivElement>) {
    const regionArr = document.querySelectorAll('.commu-region__btn');
    regionArr.forEach((el) => {
      el.className = 'commu-region__btn';
    });
    e.currentTarget.className = 'commu-region__btn active';
    setSelectedRegion(e.currentTarget.innerText);
  }

  return(
    <CommuRegionContainer>
      <CommuRegionBtnBox>
      <div className="commu-region__btn active" onClick={e => clickRegion(e)} >모든 지역보기</div>
      {
        regions.map((el, idx) => (
          <div className="commu-region__btn" key={idx} onClick={e => clickRegion(e)}>{el}</div>
        ))
      }
      </CommuRegionBtnBox>
      <CommuSearchBox>
        <input id="commu-region__search-form" type="text" placeholder="제목 또는 내용 입력" />
        <img id="commu-region__search-icon" src={search_icon} alt="search-icon" />
      </CommuSearchBox>
    </CommuRegionContainer>
  )
}

export default CommuRegion;