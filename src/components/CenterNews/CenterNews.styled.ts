import styled from "styled-components";

export const CenterNewsContainer = styled.div`
  width: 44.125em;
  height: 21.875em;
  background-color: #f6f6f6;
  box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
  border-radius: 0.875em;
  position: relative;
`;

export const CenterNewsHeader = styled.div`
  width: 40.375em;
  height: 2.3125em;
  display: flex;
  justify-content: space-between;
  line-height: 1.5625rem;
  letter-spacing: -0.05em;
  position: absolute;
  top: 1.125em;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid #CBCBCB;

  #center-news__header--text {
    font-size: 21px;
    font-weight: 700;
  }
`;

export const CenterSetting = styled.div`
  font-size: 17px;
  width: 9.5em;
  height: 2em;
  display: flex;
  justify-content: space-between;
  color: #535353;
  cursor: pointer;

  #center-news__header--setting-btn {
    font-weight: 600;
  }
`;

export const RegionContainer = styled.div`
  font-size: 17px;
  width: 16em;
  height: 1.7647em;
  position: absolute;
  top: 3.9412em;
  left: 2.4118em;

  .center-news__region-btn {
    font-size: 17px;
    width: 4.1176em;
    height: 1.5294em;
    border-radius: 0.5882em;
    border: 0;
    font-family: Pretendard;
    background-color: #DADADA;
    margin: 0.1176em 0.3529em;
  }

  .active {
    background-color: #59CACB;
    font-weight: 600;
    color: #fff;
  }
`;

export const LearningGround = styled.div`
  font-size: 15px;
  width: 43.0667em;
  height: 14.8em;
  background-color: #fff;
  border-radius: 0.9333em;
  position: absolute;
  top: 7.2em;
  left: 50%;
  transform: translateX(-50%);
`;

export const LearningGroundHeader = styled.div`
  font-size: 15px;
  width: 6em;
  height: 1.2em;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 1.4em;
  left: 1.4em;

  #center-news__learning-ground--circle {
    width: 1.0667em;
    height: 1.0667em;
    border-radius: 50%;
    background-color: #d9d9d9;
  }

  #center-news__learning-ground--text {
    font-weight: 600;
    line-height: 1.2em;
    color: #535353;
  }
`;

export const LearningGroundList = styled.div`
  width: 34.0625rem;
  height: 6.5625rem;
  position: absolute;
  top: 3.2rem;
  left: 3rem;
  font-weight: 600;
`

export const LearningGroundProgram = styled.div`
  width: 34.0625rem;
  height: 1.125rem;
  display: flex;
  justify-content: space-between;
  margin: 0.625rem 0;
`;

export const LearningGroundText = styled.div`
  width: max-content;
  height: 1.125rem;
`;

export const CenterNewsOut = styled.div`
  width: 23.75rem;
  height: 3rem;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  position: absolute;
  top: 10.5rem;
  left: 50%;
  transform: translateX(-50%);
`;