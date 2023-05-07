import styled from "styled-components";

export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #91C8CA;
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
`

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
  align-items: center;
  
`
export const MainBody_Today_In = styled.div`
  position: absolute;
  top: 2.625rem;
  left: 8.875rem;
  width: 1156px;
  height: 350px;
  display: flex;
  justify-content: space-between;
`
export const MainBody_Today_New = styled.div`
  position: relative;
  width: 706px;
  height: 350px;
  background-color: white;
`
