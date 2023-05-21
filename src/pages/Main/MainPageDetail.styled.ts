import styled from "styled-components";



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
    margin-left: 126px;
    margin-top: 13px;
  }
  .MainBody_Tapbar_In > button{
    width: 140px;
    height: 44px;
    background-color:transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: #B0B0B0;
    letter-spacing: -5%;
  }
`
export const MainBody_Content_title = styled.div`
  position: relative;
   width: 100%;
   height: 108px;
  display: flex;
  align-items: end;
`
export const MainBody_Content_title1 = styled.div`
 position: absolute;
  left: 142px;
  font-size: 26px;
  letter-spacing: -5%;
  font-weight: 500px;
  margin-bottom: 3px;
`
export const MainBody_Content_detail = styled.div`
  position: absolute;
  display: flex;
  font-size: 20px;
  letter-spacing: -5%;
  margin-left: 360px;
  width: 115px;
  height: 36px;
  cursor: pointer;
  border: 1px solid #B0B0B0;
  border-radius: 20px;


  #center-news__header--setting-text {
    font-weight: 400;
    margin-left: 24px;
    margin-top: 6px;
    color: #535353;
  }
`


export const MainBody_Card = styled.div`
width: 1218px;
height: 112px;
display: flex;
margin-left: 142px;
margin-top: 50px;
`

export const Mainbody_CardContent = styled.div`
width: 344px;
height: 112px;
border-radius: 16px;
background-color: #F6F6F6;
margin-right: 62px;
display: flex;
img{
  width: 48px;
  height: 40px;
  margin-left: 36px;
  margin-top: 36px;
}
.Card-title{
  margin-left: 30px;
  margin-top: 22px;
  font-size: 20px;
  font-weight: 800;
  color: #000000;
}
.Card-content{
  margin-top: 7px;
  margin-left: 30px;
  font-size: 15px;
  font-weight: 500;
}
`

export const Main_Program = styled.div`
width: 100%;
height: 539px;
`
export const Main_Program_Title = styled.div`
width: 270px;
height: 27px;
margin-top: 18px;
margin-left: 144px;
font-size: 23px;
font-weight: 500;
letter-spacing:-5%;
display: flex;
.color{
  color: #39AFB0;
}
`
export const Main_Program_content = styled.div`
width: 1180px;
height: 486px;
margin-left: 142px;
margin-top: 10px;
`
////////////////////////Tap 시작//////////////////////////////
export const TapModal = styled.div`
display: flex;

`
/////////모달 스타일 시작//////////////////////////

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
  margin-top: 107px;
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
