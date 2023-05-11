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
border: 1px solid red;
`
export const Main_Program_Title = styled.div`
width: 250px;
height: 25px;
border: 1px solid red;
margin-top: 18px;
margin-left: 144px;
font-size: 21px;
font-weight: 500;
letter-spacing: -5%;
`
export const Main_Program_content = styled.div`
width: 1180px;
height: 486px;
margin-left: 142px;
margin-top: 10px;
border: 1px solid red;
`
////////////////////////Tap 시작//////////////////////////////
export const TapModal = styled.div`
display: flex;

`
/////////모달 스타일 시작//////////////////////////
export const Modal1 = styled.div`
width: 836px;
height: 770px;
border-radius: 20px;
background-color: white;
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

//모달 내용 작성합니다
export const MainText = styled.div`
width: 130px;
height: 29px;
font-size: 23px;
font-weight: 700;
margin-left: 353px;
margin-top: 29px;
`
export const Content = styled.div`
height: 570px;
width: 712px;
border:1px solid red;
font-size: 20px;
font-weight: 700;
margin-left: 62px;
margin-top: 34px;
letter-spacing: -5%;
`
export const Title = styled.div`
margin-bottom: 50px;
justify-content: space-between;
display: flex;
div{
    width: 37px;
}
input{
    width: 611px;
    height: 44px;
    
    
}
`
export const Region = styled.div`
margin-bottom: 50px;
`     
export const Class = styled.div`
margin-bottom: 50px;
`
export const Day = styled.div`
margin-bottom: 50px;
`
export const Write = styled.div`
margin-bottom: 50px;
justify-content: space-between;
display: flex;
input{
    width: 611px;
    height: 200px;
    
}
`
export const Button = styled.div`
display: flex;
`;

export const ExitBtn = styled(ModalBtn) `
background-color : white;
color: black;
border-radius: 14px;
text-decoration: none;
margin-left: 189px;
//padding: 5px 10px;
width: 217px;
height: 61px;
display : flex;
justify-content : center;
align-items : center;
font-size: 21px;
font-weight: 700;
border: 3px solid #DADADA;
`
export const SubmitBtn = styled.button`
background-color : #39AFB0;
color: white;
border-radius: 14px;
text-decoration: none;
margin-left: 24px;
//padding: 5px 10px;
width: 217px;
height: 61px;
display : flex;
justify-content : center;
align-items : center;
font-size: 21px;
font-weight: 700;
border: none;
`;