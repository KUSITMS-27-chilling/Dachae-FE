import styled from "styled-components";
import { detailOrCommu } from "../../types/review";
import temp_program from "../../assets/temp_program.jpg";

export const ReviewContainer = styled.div<{ detailOrCommu: detailOrCommu }>`
  /* width: 57.5rem; */
  width: ${props => props.detailOrCommu == 'detail' ? '72.25rem' : '57.5rem'};
  height: 26.25rem;
  position: relative;
  margin: 0 auto;
  border-bottom: 2px solid #cbcbcb;
  cursor: pointer;
`;

export const ReviewProfile = styled.div<{ topProp?: boolean, img?:string }>`
  width: max-content;
  height: 3rem;
  display: flex;
  position: absolute;
  top: ${props => props.topProp ? '2.4375rem' : '2rem'};

  #review__profile-photo {
    background-image: ${props => `url(${props.img})`};
    object-fit: cover;
    background-size:cover;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
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

export const ReviewText = styled.div<{ detailOrCommu: detailOrCommu }>`
  /* width: 37.125rem; */
  width: ${props => props.detailOrCommu == 'detail' ? '46.5rem' : '37.125rem'};
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

export const ReviewSeeMore = styled.div<{ seeMore?: boolean }>`
  width: 2.9375rem;
  height: 1.3125rem;
  font-size: 18px;
  color: #535353;
  cursor: pointer;
  display: ${props => props.seeMore ? 'visible' : 'none'};
  margin-top: 12px;
`;

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

export const ReviewContent = styled.div<{ detailOrCommu: detailOrCommu }>`
  /* width: 37.125rem; */
  width: ${props => props.detailOrCommu == 'detail' ? '46.5rem' : '37.125rem'};
  height: 87px;
  overflow: hidden;
  font-size: 18px;
  border: 1px solid black;
`;

export const ReviewPlace = styled.div<{ topProp?: boolean }>`
  width: max-content;
  height: 2.0625rem;
  display: flex;
  font-size: 19px;
  line-height: 2.0625rem;
  position: absolute;
  top: ${props => props.topProp ? '0' : '21.5rem'};

  #review__place-region {
    width: max-content;
    height: 2.0625rem;
    background-color: #e9f8f1;
    border-radius: 1.6786rem;
    color: #39afb0;
    font-weight: 700;
    padding: 0.25rem 0.625rem;
    margin-right: 0.875rem;
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

export const ReviewImage = styled.div<{ reviewImg?: string }>`
  width: 15.625rem;
  height: 15.625rem;
  position: absolute;
  top: 7.1875rem;
  right: 0;

  #review__image {
    width: 15.625rem;
    height: 15.625rem;
    background-color: #fff;
    background-image: ${props => `url(${props.reviewImg})`};
    border-radius: 0.625rem;
    position: absolute;
    background-size: cover;
    object-fit:cover;
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
    display: ${props => props.reviewImg ? 'visible' : 'none'};
  }
`;