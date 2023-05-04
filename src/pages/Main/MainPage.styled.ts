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
export const MainBody_Today_My = styled.div`
  position: relative;
   width: 380px;
   height: 350px;
  border-radius: 20px;
  margin-left: 50px;
  background-color: #F6F6F6;
  box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
`
export const MainBody_Today_My_Top = styled.div`
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
export const MainBodyTodayTap1 = styled.div`
   
   width: 380px;
   height: 213px;
  background-color: white;
  //탭바 감싸는거
`

export const MainBody_Today_My_Bottom = styled.div`
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
//내용 컴포넌트 1




//메인페이지 MainBody_Content 안 컴포넌트 스타일 지정
export const MainBody_Content = styled.div`
  position: relative;
  width: 100%;
  height: 684px;
  background-color: white;
  border: 1px solid red;

`

export const MainBody_Content_title = styled.div`
  position: relative;
   width: 100%;
   height: 91px;
  background-color: white;
  border: 1px solid blue;
  display: flex;
  align-items: end;
`
export const MainBody_Content_title1 = styled.div`
 position: absolute;
  left: 114px;
  font-size: 26px;
  
`
export const MainBody_Content_People = styled.div`
  position: absolute;
  right: 220px;
  font-size: 18px;
  color: #7D7D7D;
`
export const MainBody_Content_detail = styled.div`
  position: absolute;
  right: 134px;
  size: 18px;
`

/////여기까지 컴포넌트
export const MainBody_Content_Btn = styled.div`
  position: relative;
  width: 1056px;
  height: 82px;
  border: 1px solid blue;
  margin-left: 112px;
  margin-top: 24px;
  background-color: #F6F6F6;
  border-radius: 16px;
  display: flex;
  text-align : center;
  line-height : 80px;
  font-size: 16px;

  .Content_Btn_3 {
  
  width: 352px;
  height: 82px;
  
}
.Content_Btn_2 {
  
  width: 352px;
  height: 82px;
  border: 1px solid red;
  
}
 .Btn_3{
  margin-right: 24px;
 }
`
export const MainBody_Content_Program = styled.div`
  position: relative;
  width: 1056px;
  height: 481px;
  border: 1px solid blue;
  margin-left: 112px;
`
export const MainBody_Content_Program_Title = styled.div`
height: 30px;
border: 1px solid blue;
font-size: 20px;
margin-top: 44px;
`
export const MainBody_Content_Program_Content = styled.div`
position: relative;
width: 1056px;
height: 330px;
border: 1px solid blue;
margin-top: 24px;
display: flex;
justify-content: space-between;
`
