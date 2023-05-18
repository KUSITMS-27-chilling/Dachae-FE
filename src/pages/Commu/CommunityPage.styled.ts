import styled from "styled-components";
export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: white;
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
    width: 600px;
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
    font-weight: 600;
    color: #B0B0B0;
    Letter-spacing: -5%;
  }
`
export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #91C8CA;
`
