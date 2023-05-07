import styled from "styled-components";

export const TabMenu = styled.div`
  position: relative;
  background-color:  #F6F6F6;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-left:144px;
  margin-top: 111px;
  
  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    margin-right: 40px;
    width: 219px;
    height: 71px;
    //padding: 10px;
    transition: 0.3s;
    border: none;
    font-size: 26px;
    font-weight: 700;
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
//탭 1번쨰꺼
export const WriteComponent1 = styled.div`
  width: 1156px;
  height: 420px;
  margin-left:142px;
  border: 1px solid red;
  `

////탭2번째꺼
  export const WriteComponent2 = styled.div`
  width: 1156px;
  height: 343px;
  margin-left:142px;
  border: 1px solid red;
  `

export const ModalBtn = styled.button`
background-color: purple;
text-decoration: none;
border: none;
padding: 20px;
color: white;
border-radius: 30px;
cursor: grab;
width: 122px;
height: 40px;
`;
export const ModalBg = styled.div`
// Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
z-index: 1; //위치지정 요소
position: fixed;
display : flex;
justify-content : center;
align-items : center;
background-color: rgba(0,0,0,0.4);
border-radius: 10px;
top : 0;
left : 0;
right : 0;
bottom : 0;
`;