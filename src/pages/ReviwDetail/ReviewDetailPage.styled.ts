import styled from "styled-components";
export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #91C8CA;
`
export const ReviewDetailBox = styled.div`

  position: relative;
  margin-left: 393px;
  margin-top: 45px;
`
export const Comment = styled.div`
  position: relative;
  margin-left: 378px;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  margin-top: 72px;
  margin-left:378px;
  .num{
    color: #39AFB0;
  }
`
export const CommentWrite = styled.div`
  position: relative;
  margin-left: 378px;
  margin-top: 25px;
  margin-bottom:800px;
  input{
    width: 919px;
    height: 50px;
    border: 1px solid #CBCBCB;
    border-radius: 10px;
    background: none;
    ::placeholder{
      font-family: 'Pretendard';
      font-weight: 500;
      font-size: 20px;
      line-height: 50px;
      color: rgba(0, 0, 0, 0.61);
      margin-left: 50px;
    }
  }
`