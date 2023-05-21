import styled from "styled-components";

export const PreparingWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
`;

export const PreparingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  bottom: 0;
`

export const PreparingBox = styled.div`

  @keyframes popupAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  width: 300px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.5);;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  border-radius: 1.5625rem;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: popupAnimation 1.2s ease-in-out backwards;
`;