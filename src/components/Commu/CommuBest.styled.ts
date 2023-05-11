import styled from "styled-components";

export const CommuBestBox = styled.div`
position: relative;
  width: 212px;
  height: 132px;
  border: 3px solid #767676;
  border-radius: 10px;
`
export const Best = styled.div`
    position: relative;
  width: 38px;
  height: 18px;
  margin-top: 16px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 700;
  color: #535353;
`
export const Text = styled.div`
  position: relative;
  width: 170px;
  height: 50px;
  border: 3px solid #767676;
  margin-top: 9px;
  margin-left: 18px;
`

//내가 남긴 후기 글 박스
export const CommuBestBox1 = styled.div`
position: relative;
  width: 212px;
  height: 132px;
  border: 3px solid #59C7C8;
  border-radius: 10px;
`
export const Title = styled.div`
    position: relative;
  width: 176px;
  height: 18px;
  margin-top: 16px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`
export const Text1 = styled.div`
    position: relative;
  width: 38px;
  height: 18px;
  margin-top: 16px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 700;
  color: #535353;
`
//버튼 컴포넌트
// export const CommuPostButton = styled.div`
//     position: relative;
//   width: 920px;
//   height: 46px;
//   font-size: 15px;
//   font-weight: 700;
//   color: #535353;

//`

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
`

export const Stylebutton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16.5rem;
  height: 2.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #commu-post-btn__img {
    width: 1.75rem;
    height: 1.75rem;
  }

  #commu-post-btn__text {
  }
`