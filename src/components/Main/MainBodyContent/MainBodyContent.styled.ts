import styled from "styled-components";

export const MainContent = styled.div`
  position: relative;
  width: 100%;
  height: 46.4375rem;
  background-color: white;
`

export const MainContentWrapper = styled.div`
  width: 72.125rem;
  height: 43.7em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 1px solid #a9a9a9;
`;

export const MainContentHeader = styled.div`
  position: relative;
  width: 72.125rem;
  height: 3.4375rem;
  background-color: white;
  display: flex;
  align-items: end;

  #main-content__lg-name {
    width: 13rem;
    height: 1.9375rem;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.9375rem;
    letter-spacing: -0.05em;
    color: #000;
  }

  #main-content__lg-detail {
    width: 4.9781rem;
    height: 1.3125rem;
    position: absolute;
    right: 0;
    font-size: 18px;
    line-height: 1.3125rem;
    color: #535353;
    cursor: pointer;
  }
`

export const MainContentFav = styled.div`
  position: absolute;
  width: max-content;
  height: 1.3125rem;
  right: 5.9781rem;
  font-size: 18px;
  line-height: 1.3125rem;
  letter-spacing: -0.05em;
  color: #7D7D7D;
  display: flex;

  #main-content__fav-count {
    color: #39afb0;
  }
`

export const MainContentBtn = styled.div`
cursor: pointer;
  width: 72.25rem;
  height: 5.125rem;
  background-color: #f6f6f6;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 4.9375rem;

  .main-content__btn-inside {
    width: 24.125rem;
    height: 2.875rem;
    position: relative;
  }

  #main-content__btn-mid {
    border-left: 1px solid #cbcbcb;
    border-right: 1px solid #cbcbcb;
  }

  .main-content__btn-img {
    margin-right: 1.875rem;
  }

  .main-content__btn-text {
    width: max-content;
    height: 1.3125rem;
    display: flex;
    font-size: 18px;
    font-weight: 500;
  }

  .main-content__btn-region {
    width: max-content;
    height: 1.3125rem;
    color: #59cacb;
  }

  .main-content__btn-rest {
    width: max-content;
    height: 1.3125rem;
  }

  .main-content__btn-wrapper {
    width: max-content;
    height: 2.625rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 1.3125rem;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 4.875rem;
    transform: translateY(-50%);

    #main-content__btn-img-1 {
      width: 2.125rem;
      height: 1.4375rem;
    }

    #main-content__btn-img-2 {
      width: 1.6875rem;
      height: 1.5rem;
    }

    #main-content__btn-img-3 {
      width: 2rem;
      height: 2rem;
    }
  }

  .sec-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .thi-wrap {
    position: absolute;
    top: 50%;
    right: 6.0625rem;
    transform: translateY(-50%);
  }
`
export const MainContentProgram = styled.div`
  width: 72.25rem;
  height: 25.875rem;
  position: absolute;
  top: 12.8125rem;
  left: 50%;
  transform: translateX(-50%);

  #main-content__program-header {
    width: max-content;
    height: 1.5625rem;
    display: flex;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.5625rem;
    letter-spacing: -0.05em;

    #main-content__program-region {
      color: #39afb0;
    }
  }
`
export const MainContentProgramContainer = styled.div`
  width: 72.25rem;
  height: 22.375rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
`