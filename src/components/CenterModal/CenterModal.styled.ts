import styled from "styled-components";

export const CModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
`

export const CModalBackground = styled.div`
  background-color: rgba(39, 39, 39, 0.48);
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  bottom: 0;
`

export const CModalContainer = styled.div`
  width: 52.25rem;
  height: 48.125rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1.75rem;
  border: 0;
`;

export const CModalContent = styled.div`
  width: 48rem;
  height: 43rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  #center-modal__title {
    width: 10.75rem;
    height: 1.8125rem;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.8125rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  #center-modal__warning-text {
    width: 21.0625rem;
    height: 1.5rem;
    color: #ff0303;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: 37.4rem;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
  }
`;

export const CModalMy = styled.div`
  width: 38.25rem;
  height: 6.3125rem;
  position: absolute;
  top: 2.875rem;
  left: 0;

  #center-modal__my-text {
    width: 9.125rem;
    height: 1.5625rem;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.5625rem;
    letter-spacing: -0.05em;
    margin-bottom: 1.0625rem;
  }
`;

export const CModalTotal = styled.div`
  width: 38.25rem;
  height: 25.0625rem;
  position: absolute;
  top: 10.9375rem;
  left: 0;

  #center-modal__total-text {
    width: 9.125rem;
    height: 1.5625rem;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.5625rem;
    letter-spacing: -0.05em;
    margin-bottom: 1.0625rem;
  }
`;

export const CenterBtnContainer = styled.div`
  width: 49rem;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
`;

export const CenterBtn = styled.button`
  width: 9rem;
  height: 3.6875rem;
  margin-right: 0.75rem;
  margin-bottom: 1rem;
  background-color: #b4b4b4;
  border-radius: 0.75rem;
  border: 0;
  color: #fff;
  font-size: 23px;
  font-weight: 500;
  font-family: Pretendard;

  :last-child {
    margin-right: 0;
  }
`;