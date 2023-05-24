import styled from "styled-components";

export const CommuRegionContainer = styled.div`
  width: 57.5rem;
  height: 4.25rem;
  display: flex;
  position: absolute;
  border-bottom: 2px solid #cbcbcb;
`;

export const CommuRegionBtnBox = styled.div`
  width: max-content;
  height: 2.25rem;
  display: flex;
  position: absolute;
  top: 27%;
  left: 0;
  transform: translateY(-50%);

  .commu-region__btn {
    width: max-content;
    height: 36px;
    background-color: #dadada;
    color: #535353;
    font-size: 20px;
    font-weight: 500;
    border-radius: 0.75rem;
    line-height: 36px;
    padding: 3px 17px;
    margin-right: 0.75rem;
    cursor: pointer;
    letter-spacing: -0.05em;
  }

  .active {
    background-color: #59cacb;
    color: #fff;
    font-weight: 700;
  }
`;

export const CommuSearchBox = styled.div`
//border: 1px solid black;
  width: 18.5rem;
  height: 26px;
  line-height: 26px;
  border-bottom: 2px solid #cbcbcb;
  position: absolute;
  top: 29%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;

  #commu-region__search-form {
    width: 16rem;
    height: 1.1875rem;
    border: 0;
    outline: none;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    font-family: Pretendard;
  }

  #commu-region__search-icon {
    width: 1.09375rem;
    height: 1.09375rem;
    cursor: pointer;
  }
`;