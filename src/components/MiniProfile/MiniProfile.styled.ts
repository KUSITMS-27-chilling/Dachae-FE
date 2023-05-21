import styled from "styled-components";

export const MiniProfileContainer = styled.div`
  width: 23.75rem;
  height: 13.3125rem;
  background-color: #fff;
`;

export const MiniProfileTapBox = styled.div`
  width: 23.75rem;
  height: 2.8125rem;
  display: flex;

  .active {
    background-color: #fff;
    color: #000;
    font-weight: 700;
    border-bottom: 1px solid rgba(203, 203, 203, 0.4);
  }
`;

export const MiniProfileTap = styled.div`
  width: 11.875rem;
  height: 2.8125rem;
  text-align: center;
  line-height: 2.8125rem;
  border-right: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
  font-size: 15px;
  font-weight: 500;
  background-color: #f6f6f6;
  color: #535353;

  :last-child {
    border-right: 0;
  }
`;

export const LearningGradeBox = styled.div`
  width: 23.75rem;
  height: 10.5rem;
  display: flex;
  position: relative;

  #learning-grade__grade-top {
    width: 20rem;
    height: 2.75rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 1.5rem;
    left: 1.875rem;
  }

  #learning-grade__vane-img {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    bottom: 4px;
    right: 0;
  }

  #learning-grade__grade-bottom {
    width: 19.75rem;
    height: 3.8125rem;
    position: absolute;
    top: 5.875rem;
    left: 1.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #activity-field__text {
    width: 6rem;
    height: 1rem;
    color: #535353;
    font-size: 15px;
    font-weight: 700;
  }

  #activity-field__container {
    width: 19.75rem;
    height: 1.6875rem;
    display: flex;
  }

  .activity-field {
    width: max-content;
    height: 1.6875rem;
    background-color: #d9d9d9;
    border-radius: 1.625rem;
    border: 0;
    padding: 0px 15px;
    color: #535353;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6875rem;
    margin-right: 12px;

    :last-child {
      margin-right: 0;
    }
  }
`

export const LearningNewsBox = styled.div`
  width: 23.75rem;
  height: 10.5rem;
`

export const LearningGradeBar = styled.div`
  width: 17rem;
  height: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  #learning-grade__progress-bar {
    width: 16.9375rem;
    height: 0.375rem;
    appearance: none;
  }

  #learning-grade__progress-bar::-webkit-progress-bar {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #d9d9d9;
  }

  #learning-grade__progress-bar::-webkit-progress-value {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #66dccf;
  }

  #learning-grade__level-text{
    width: 17rem;
    height: 1.125rem;
    display: flex;
    justify-content: space-between;
    color: #535353;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const MyActivityField = styled.div`
  width: 19.75rem;
  height: 3.8125rem;
`;

export const LearningNews = styled.div`
  width: 23.75rem;
  height: 3.5rem;
`;