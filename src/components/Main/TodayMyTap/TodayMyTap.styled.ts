import styled from 'styled-components';

//탭바 컴포넌트 디자인
export const TabMenu = styled.div`
  position: relative;
  background-color:  #F6F6F6;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  font-size: 13px;
  font-weight: 700;
  
  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    /* justify-content: space-between;
    width: 380px;
    heigth: 30px; */
    width: calc(100% /2);
    padding: 10px;
    font-size: 15px;
    transition: 0.3s;
    border: 1px solid #CBCBCB;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: white;
    color: rgb(21,20,20);
  }

  & div.desc {
    //text-align: center;
  }
`
export const Desc = styled.div`
  justify-content: center;

  .Tab-Desc{
    width: 380px;
    height: 56px;
    border: 1px solid #CBCBCB;
    font-size: 15px;
    font-weight: 500;
    color: #535353;
    display: flex;
  }
  .Tab-Desc-font{
    margin-top: 13px;
  }
  .Tab-Desc-font > img{
    margin-left: 35px;
    margin-right: 22px;
  }
  .Tab-Desc-2{
    width: 380px;
    height: 90px;
  }
  .Tab-Desc-2-1{
    width: 380px;
    height: 78px;
    margin-left: 30px;
    font-size: 15px;
    color: #535353;
    font-weight: 600;
  }
  .TapBtn-2 > button {
    position: absolute;
    margin-top: 15px;
    background-color: #D9D9D9;
    border: none;
    width: 70px;
    height: 27px;
    border-radius: 26px;
    color: 535353;
    font-size: 15px;
    font-weight: 600;
  }
`