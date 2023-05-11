import styled from "styled-components";

export const DetailTabContainer = styled.div`
  width: 100%;
  height: 4.4375rem;
  border-bottom: 2px solid #f2f2f2;
  margin-top: 4.8125rem;
  position: relative;

  button {
    width: max-content;
    height: 2.5rem;
    position: absolute;
    top: 1.25rem;
    right: 8.875rem;
    border: 2.33333px solid #B0B0B0;
    background-color: #fff;
    border-radius: 1.25rem;
    font-size: 20px;
    color: #535353;
    line-height: 2.5rem;
    letter-spacing: -0.05em;
    padding: 7px 22px;
    text-align: center;
    display: flex;
    align-items: center;
  }
`;

export const DetailTabToggle = styled.div`
  width: 18.375rem;
  height: 2.9375rem;
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  font-weight: 600;
  color: #b0b0b0;
  position: absolute;
  top: 1.3rem;
  left: 8.875rem;

  .detail-tab__toggle {
    width: 9.1875rem;
    height: 2.9375rem;
    display: flex;
    align-items: center;
    position: relative;
  }

  .active {
    border-bottom: 4px solid #000;
    font-weight: 700;
    .first {
      color: #39afb0;
    }
    .second {
      color: #000;
    }
  }

  .detail-tab__text-box {
    width: 6.6rem;
    height: 1.9375rem;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .detail-tab__text {
    text-align: center;
    width: 3.22rem;
    height: 1.9375rem;
  }

`

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