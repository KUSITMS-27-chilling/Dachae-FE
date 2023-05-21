import { 
    RegionContainer,
    RegionBtnBox,
    SearchBox
  } from "./SuggsetRegion.styled";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { loginState } from "../../recoil/user";
  import {suggestRegions, selectRegion } from "../../recoil/Teacher";
  import { useRecoilValue, useSetRecoilState } from "recoil";
  import search_icon from '../../assets/search_icon.png';

  
  function SuggestRegion () {
     const state = useRecoilValue(loginState);
     const regions = useRecoilValue(suggestRegions);
     const setRegion = useSetRecoilState(suggestRegions);
     const setSelectRegion = useSetRecoilState(selectRegion);
  
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
        setRegion(response.data.data.regions);
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
        setRegion(response.data.data.regions);
      })
      .catch((err) => console.log(err))
    }
  
    function clickRegion (e: React.MouseEvent<HTMLDivElement>) {
      const regionArr = document.querySelectorAll('.commu-region__btn');
      regionArr.forEach((el) => {
        el.className = 'commu-region__btn';
      });
      e.currentTarget.className = 'commu-region__btn active';
      setSelectRegion(e.currentTarget.innerText);
    }
  
    return(
      <>
      <RegionContainer>
        <RegionBtnBox>
        <div className="commu-region__btn active" onClick={e => clickRegion(e)} >전체보기</div>
        {
          regions.map((el, idx) => (
            <div className="commu-region__btn" key={idx} onClick={e => clickRegion(e)}>{el}</div>
          ))
        }
        </RegionBtnBox>
        <SearchBox>
          <input id="commu-region__search-form" type="text" placeholder="제목 또는 내용 입력" />
          <img id="commu-region__search-icon" src={search_icon} alt="search-icon" />
        </SearchBox>
      </RegionContainer>
      
      </>
    )
  }
  
  export default SuggestRegion;