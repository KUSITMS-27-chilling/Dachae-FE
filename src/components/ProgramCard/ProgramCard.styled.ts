import styled from "styled-components";

export const ProgramCardContainer = styled.div<{ imgSrc: string }>`
  width: 22.125rem;
  height: 22.375rem;
  box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
  border-radius: 1.25em;
  overflow: hidden;
  letter-spacing: -0.05em;
  position: relative;

  #program-card__image {
    background-image: ${props => `url(${props.imgSrc})`};
    height: 13.625rem;
    background-size: cover;
  }

  #program-card__title {
    font-size: 21px;
    width: 16.5rem;
    height: 4.125rem;
    line-height: 1.5625rem;
    position: absolute;
    top: 14.875rem;
    left: 1.75rem;
    font-weight: 500;
  }
`;

export const ProgramCardBottom = styled.div`
  font-size: 18px;
  width: 18.625rem;
  height: 2.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 19rem;
  left: 50%;
  transform: translateX(-50%);

  #program-card__btn {
    width: 7.75rem;
    height: 2.125rem;
    background-color: #E9F8F1;
    border-radius: 0.75rem;
    border: 0;
    color: #39AFB0;
    font-weight: 600;
    font-family: Pretendard;
    font-size: 18px;
    cursor: pointer;
  }

  #program-card__deadline {
    width: 5.1875rem;
    height: 1.3125rem;
    color: #7D7D7D;
  }
`;