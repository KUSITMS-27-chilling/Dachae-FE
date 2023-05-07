import styled from "styled-components";

export const TodayMyOutContainer = styled.div`
  width: 19.375rem;
  height: 17.8125rem;
  position: absolute;
  top: 1.6875rem;
  left: 2.1875rem;

  #today-my-out__login-text {
    width: 3.25rem;
    height: 1.5rem;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    left: 1px;
  }

  #today-my-out__login-btn {
    width: 19.375rem;
    height: 2.25rem;
    background-color: #59CACB;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border: 0;
    border-radius: 0.25rem;
    line-height: 2.25rem;
    position: absolute;
    top: 9.25rem;
    cursor: pointer;
  }

  #today-my-out__register-btn {
    width: 2.5rem;
    height: 0.875rem;
    font-size: 12px;
    line-height: 0.875rem;
    letter-spacing: -0.05em;
    color: #535353;
    border-bottom: 1px solid #535353;
    position: absolute;
    top: 12rem;
    right: 0;
    cursor: pointer;
  }
`;

export const TodayFormContainer = styled.div`
  width: 19.375rem;
  height: 5.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 2.4375rem;

  .today-my-out__form {
    width: 18.5rem;
    height: 2.5rem;
    background-color: #fff;
    border: 0;
    border-radius: 0.25rem;
    outline: none;
    padding-left: 0.875rem;
  }

  input::-webkit-input-placeholder {
    font-size: 15px;
    font-weight: 500;
    color: #535353;
    line-height: 1.125rem;
    letter-spacing: -0.05em;
  }
`;

export const DividerContainer = styled.div`
  width: 19.25rem;
  height: 1rem;
  position: absolute;
  top: 13.5625rem;
  color: #535353;
  
  #today-my-out__line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 1px solid #535353;
  }

  #today-my-out__line-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f6f6f6;
    font-size: 13px;
    letter-spacing: -0.05em;
  }
`;

export const TodayMyOutLogin = styled.div`
  width: 19.375rem;
  height: 2.25rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 15.5625rem;

  img {
    cursor: pointer;
  }
`;