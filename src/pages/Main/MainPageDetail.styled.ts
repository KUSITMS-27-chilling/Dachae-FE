import styled from "styled-components";

export const MainBody_Content_Header = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: end;

  .program-detail__telephone-number {
    position: absolute;
    right: 16rem;
    top: 9.3rem;
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .active {
    opacity: 1;
  }
`
export const MainBody_Content_title = styled.div`
  position: absolute;
  left: 142px;
  font-size: 26px;
  letter-spacing: -0.05em;
  font-weight: 600;
  margin-bottom: 3px;
`
export const MainBody_Content_detail = styled.div`
  position: absolute;
  display: flex;
  font-size: 20px;
  letter-spacing: -0.05em;
  margin-left: 345px;
  width: 115px;
  height: 36px;
  cursor: pointer;
  border: 2.33px solid #B0B0B0;
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
  margin: 3.125rem 0 3.5625rem 8.875rem;
`

export const Mainbody_CardContent = styled.div`
  width: 344px;
  height: 112px;
  border-radius: 16px;
  background-color: #F6F6F6;
  margin-right: 62px;
  display: flex;
  position: relative;

  #program-detail__btn1 {
    width: 4.0256rem;
    height: 2.875rem;
    position: absolute;
    top: 1.9375rem;
    left: 1.875rem;
  }

  #program-detail__btn2 {
    width: 2.3125rem;
    height: 3.4375rem;
    position: absolute;
    top: 1.625rem;
    left: 2.6875rem;
  }

  #program-detail__btn3 {
    width: 3.25rem;
    height: 3.25rem;
    position: absolute;
    top: 1.8125rem;
    left: 2.25rem;
  }

  .Card {
    width: max-content;
    height: 4.1875rem;
    position: absolute;
    top: 1.375rem;
    left: 7.375rem;
  }

  .Card-title{
    width: max-content;
    height: 1.625rem;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .Card-content {
    width: max-content;
    height: 2.3125rem;
    color: #535353;
    font-size: 15px;
  }
`

export const Main_Program = styled.div`
  width: 100%;
  height: 539px;
`
export const Main_Program_Title = styled.div`
  width: max-content;
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

export const TapModal = styled.div`
  display: flex;
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
