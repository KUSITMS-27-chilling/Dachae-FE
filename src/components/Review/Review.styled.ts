import styled from "styled-components";
import temp_program from "../../assets/temp_program.jpg";

export const ReviewContainer = styled.div`
  width: 57.5rem;
  height: 26.25rem;
  border: 1px solid #000;
  position: relative;
`;

export const ReviewProfile = styled.div`
  width: max-content;
  height: 3rem;
  display: flex;
  position: absolute;
  top: 2rem;

  #review__profile-photo {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #d9d9d9;
    margin-right: 1.25rem;
  }

  #review__profile-nickname {
    width: max-content;
    height: 1.4375rem;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.4375rem;
    letter-spacing: -0.05em;
  }

  #review__profile-time {
    width: max-content;
    height: 1.25rem;
    font-size: 17px;
    color: #7d7d7d;
    line-height: 1.25rem;
    letter-spacing: -0.05em;
  }
`;

export const ReviewText = styled.div`
  width: 37.125rem;
  height: 10.4375rem;
  position: absolute;
  top: 7.0625rem;

  #review__see-more {
    width: 2.9375rem;
    height: 1.3125rem;
    font-size: 18px;
    color: #535353;
    cursor: pointer;
    display: none;
  }
`

export const ReviewInfo = styled.div`
  width: max-content;
  height: 3.375rem;

  #review__info-title {
    width: max-content;
    height: 1.5rem;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5rem;
  }

  #review__info-lecture {
    width: max-content;
    height: 1.3125rem;
    color: #535353;
    line-height: 1.3125rem;
  }

`;

export const ReviewContent = styled.div`
  width: 37.125rem;
  height: 5.6875rem;
  overflow: hidden;
  font-size: 18px;
`;

export const ReviewPlace = styled.div`
  width: max-content;
  height: 2.0625rem;
  display: flex;
  font-size: 19px;
  line-height: 2.0625rem;
  position: absolute;
  top: 21.5rem;

  #review__place-region {
    width: max-content;
    height: 2.0625rem;
    background-color: #e9f8f1;
    border-radius: 1.6786rem;
    color: #39afb0;
    font-weight: 700;
    padding: 0.25rem 0.625rem;
  }

  #review__place-detail {
    width: max-content;
    height: 2.0625rem;
    background-color: #f6f6f6;
    border-radius: 1.6786rem;
    color: #7d7d7d;
    padding: 0.25rem 0.625rem;
  }
`;

export const ReviewImage = styled.div`
  width: 15.625rem;
  height: 15.625rem;
  position: absolute;
  top: 7.1875rem;
  right: 0;

  #review__image {
    width: 15.625rem;
    height: 15.625rem;
    background-image: url(${temp_program});
    border-radius: 0.625rem;
    position: absolute;
    background-size: cover;
  }

  #review__image-count {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 28px;
    color: #fff;
    background-color: #000;
    opacity: 0.5;
    border-radius: 0 0 0.625rem 0;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;