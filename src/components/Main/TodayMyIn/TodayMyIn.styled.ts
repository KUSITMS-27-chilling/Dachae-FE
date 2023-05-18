import styled from "styled-components";

export const TodayMyTop = styled.div`
  width: 380px;
  height: 70px;

  .MainBody_Today_My_Top_logout > button{
    margin-left: 262px;
    margin-top: 25px;
    width: 87px;
    height: 28px;
    border: 2px solid #59CACB;
    background: none;
    border-radius: 26px;
    font-size: 14px;
    font-weight: 600;
  }
`

export const TodayTapBox = styled.div`
  width: 380px;
  height: 213px;
  background-color: white;
`

export const TodayBottom = styled.div`
  position: relative;
  width: 380px;
  height: 63px;
   
  //탭바 밑에 있는 버튼

  .TapBtn > button {
    position: absolute;
    margin-left: 30px;
    margin-top: 15px;
    background-color: #59CACB;
    border: none;
    width: 320px;
    height: 34px;
    border-radius: 14px;
    color: white;
    font-size: 15px;
    font-weight: 600;
  }
`