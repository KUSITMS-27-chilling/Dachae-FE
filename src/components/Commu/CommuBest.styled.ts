import styled from "styled-components";

export const CommuBestBox = styled.div`
  position: relative;
  width: 17.25rem;
  height: 10.375rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`
export const Best = styled.div`
  position: absolute;
  top: 1.0625rem;
  left: 1.125rem;
  width: 38px;
  height: 18px;
  font-size: 16px;
  font-weight: 700;
  color: #535353;
`
export const Text = styled.div`
  width: 15rem;
  height: 2.5rem;
  position: absolute;
  top: 2.875rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 600;
`

//내가 남긴 후기 글 박스
export const CommuPostBox = styled.div`
  position: relative;
  width: 17.25rem;
  height: 10.375rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  #commu-my-post__content-box {
    width: 12.5rem;
    height: 2.8125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const CommuMyContent = styled.div`
  width: 14.625rem;
  height: 7.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CommuMyTitle = styled.div`
  position: relative;
  width: 14rem;
  height: 1.3125rem;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 6px;
`
export const CommuMyDate = styled.div`
  position: relative;
  width: 5.5rem;
  height: 18px;
  font-size: 15px;
  font-weight: 500;
  color: #535353;
`

export const CommuPostBtnContainer = styled.div`
  width: 57.5rem;
  height: 2.875rem;
  position: absolute;
  bottom: 0;
  border: 2px solid #CBCBCB;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.61);;
  background: none;
  cursor: pointer;
`

export const Stylebutton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: 2.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #commu-post-btn__img {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.8125rem;
  }

  #commu-post-btn__text {
    width: max-content;
    height: 1.75rem;
  }
`