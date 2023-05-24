import styled from "styled-components";

export const DetailProgramCardContainer = styled.div`
  position: relative;
  width: 566px;
  height: 162px;
  margin-right: 22px;

  .text{
    width: 400px;
    height: 112px;
    margin-left: 27px;
  }
`;

export const MainDetailProgramCardContent = styled.div<{ imgSrc: string }>`
  display: flex;
  margin-top: 25px;

  .img{
    width: 112px;
    height: 112px;
    border-radius: 10.35px;
    background-color: gray;
    background-image: ${props => `url(${props.imgSrc})`};
    background-size: cover;
  }
`

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -5%;
  margin-top: 20px;

`
export const CardContent = styled.div`
  margin-top: 27px;
  width: 300px;
  height: max-content;
  display: flex;
  .category{
    font-size: 18px;
    letter-spacing: -0.05em;
    font-weight: 600;
    color: #606060;
    margin-right: 16px;
    margin-top: 4px; /* 바닥에 붙이기 */
  }
`
export const Button = styled.button`
  background: none;
  border: 0;
  .Btn{
    font-family: Pretendard;
    width: 174px;
    height: 30px;
    background-color: #E7E7E7;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #606060;
    cursor: pointer;
  }
`