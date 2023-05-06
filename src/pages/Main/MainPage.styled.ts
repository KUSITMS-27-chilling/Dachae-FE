import styled from "styled-components";

export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: white;
  border: 1px solid red;
`
export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #91C8CA;
  border: 1px solid red;
`
export const MainBody_Tapbar = styled.div`
  position: relative;
  width: 100%;
  height: 57px;
  background-color: white;
  border: 1px solid red;

  .MainBody_Tapbar_In{
    position: absolute;
    width: 540px;
    height: 44px;
    border: 1px solid red;
    margin-left: 112px;
    margin-top: 13px;
  }
  .MainBody_Tapbar_In > button{
    width: 135px;
    height: 44px;
    background-color:transparent;
    border: none;
    font-size: 20px;
    color: #B0B0B0;
  }
`// 탭바 박스 생성

export const MainBody_Select = styled.div`
  position: relative;
  width: 100%;
  height: 115px;
  background-color: pink;
  border: 1px solid red;

`
export const MainBody_Today = styled.div`
  position: relative;
  width: 100%;
  height: 463px;
  background-color: white;
  border: 1px solid red;
  align-items: center;
  
`
export const MainBody_Today_In = styled.div`
  position: absolute;
  width: 1136px;
  height: 350px;
  margin-left: 72px;
  display: flex;
`
 export const MainBody_Today_New = styled.div`
  position: relative;
  width: 706px;
  height: 350px;
  background-color: white;
`
