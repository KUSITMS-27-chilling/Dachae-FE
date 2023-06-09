import styled from "styled-components";
import { detailOrCommu } from "../../types/review";

export const TogetherContainer = styled.div<{ detailOrCommu: detailOrCommu }>`
  width: ${props => props.detailOrCommu == 'detail' ? '72.25rem' : '57.5rem'};
  height: 21.4375rem;
  border-bottom: 2px solid #cbcbcb;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
`;
export const ReviewProfile = styled.div<{ topProp?: boolean, profile?: string }>`
  width: max-content;
  height: 3rem;
  display: flex;
  position: absolute;
  top: ${props => props.topProp ? '2.4375rem' : '2rem'};

  #review__profile-photo {
    object-fit: cover;
    background-size:cover;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1.25rem;
    background-image: ${props => `url(${props.profile})`};
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

export const TogetherTitle = styled.div<{ recruiting: boolean }>`
  width: max-content;
  height: 1.8125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 7.75rem;
  left: 0;

  #together__recruiting {
    width: 5.375rem;
    height: 1.8125rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 1.8125rem;
    font-size: 19px;
    font-weight: 700;
    background-color: ${props => props.recruiting ? '#39afb0' : '#dadada'};
    color: ${props => props.recruiting ? '#fff' : '#535353'};
    margin-right: 0.75rem;
  }

  #together__title {
    width: max-content;
    height: 1.5rem;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const TogetherInfo = styled.div`
  width: max-content;
  height: 3.5rem;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 10.0625rem;
  left: 0;
  line-height: 1.875rem;
`;

export const TogetherFooter = styled.div<{ detailOrCommu: detailOrCommu }>`
  // width: 69.25rem;
  width: ${props => props.detailOrCommu == 'detail' ? '69.25rem' : '57.5rem'};
  height: 2.625rem;
  position: absolute;
  top: 16.125rem;
  left: 0;
  display: flex;
  align-items: center;

  #together__program-name {
    width: max-content;
    height: 2.0625rem;
    background-color: #f6f6f6;
    border-radius: 1.6786rem;
    color: #535353;
    padding: 0.25rem 0.625rem;
    position: absolute;
    right: 7.25rem;
    font-size: 19px;
    line-height: 2.0625rem;
    font-weight: 500;
    padding: 4px 17px;
  }

  #together__recruit-img {
    width: 42px;
    height: 42px;
    position: absolute;
    right: 50px;
  }

  #together__hit-and-goal {
    width: max-content;
    height: 1.5rem;
    position: absolute;
    right: 0;
    font-size: 20px;
    font-weight: 600;
    color: #7d7d7d;
  }
`;