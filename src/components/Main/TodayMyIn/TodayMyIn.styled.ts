import styled from "styled-components";

export const TodayMyTop = styled.div`
  width: 380px;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #cbcbcb;

  #today-my-top__profile-box {
    width: 13rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0.875rem;
    left: 1.8125rem;
  }

  #today-my-top__profile-img {
    width: 2.875rem;
    height: 2.75rem;
    margin-right: 0.9375rem;
  }

  #today-my-top__profile-name {
    width: max-content;
    height: 1.25rem;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.05em;
  }

  #today-my-top__logout-btn{
    width: 5.4375rem;
    height: 1.75rem;
    border: 1.4px solid #59CACB;
    border-radius: 1.625rem;
    font-weight: 600;
    position: absolute;
    top: 1.5625rem;
    right: 1.9375rem;
  }
`

export const TodayTapBox = styled.div`
  width: 380px;
  height: 213px;
  background-color: white;
`

export const TodayBottom = styled.div`
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
    font-size: 17px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.05em;
    padding: 0;
  }
`