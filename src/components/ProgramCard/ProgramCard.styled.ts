import styled from "styled-components";
import temp_program from "../../assets/temp_program.jpg";

export const ProgramCardContainer = styled.div<{ imgSrc: string }>`
  width: 19.75em;
  height: 20.25em;
  box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
  border-radius: 1.25em;
  overflow: hidden;
  letter-spacing: -0.05em;
  position: relative;

  #program-card__image {
    background-image: ${props => `url(${props.imgSrc})`};
    height: 11.8125em;
    background-size: cover;
  }

  #program-card__title {
    font-size: 21px;
    width: 12.5714em;
    height: 3.1428em;
    line-height: 1.1905em;
    position: absolute;
    top: 10em;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ProgramCardBottom = styled.div`
  font-size: 18px;
  width: 14.6667em;
  height: 1.8889em;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 15.5556em;
  left: 50%;
  transform: translateX(-50%);

  #program-card__btn {
    width: 6.88889em;
    height: 1.8889em;
    background-color: #E9F8F1;
    border-radius: 0.6667em;
    border: 0;
    color: #39AFB0;
    font-weight: 600;
    cursor: pointer;
  }

  #program-card__deadline {
    width: 4.6111em;
    height: 1.1667em;
    color: #7D7D7D;
  }
`;