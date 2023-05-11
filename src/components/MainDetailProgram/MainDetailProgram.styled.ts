import styled from "styled-components";

export const ProgramContainer = styled.div`
position: relative;
width: 1180px;
height: 486px;
display: flex;
flex-wrap: wrap;
`
export const MainDetailProgramCard = styled.div`
  position: relative;
  width: 566px;
  height: 162px;
  margin-right: 22px;
  .img{
    width: 112px;
    height: 112px;
    border-radius: 10.35px;
    background-color: gray;
  }
  .text{
    width: 400px;
    height: 112px;
    
    margin-left: 27px;
  }
  `
export const MainDetailProgramCardContent = styled.div`

display: flex;
margin-top: 25px;
`
export const CardTitle = styled.div`
font-size: 24px;
font-weight: 600;
letter-spacing: -5%;
margin-top: 20px;

`
export const CardContent = styled.div`
margin-top: 30px;
width: 300px;
height: 27px;
display: flex;
.category{
  font-size: 18px;
  letter-spacing: -5%;
  font-weight: 600;
  color: #606060;
  margin-right: 17px;
}
`
export const Button = styled.button`
background: none;
border: none;
  .Btn{
    font-family: Pretendard;
    width: 174px;
  height: 29px;
  background-color: #E7E7E7;
  border: none;
  border-radius: 12px;
 font-size: 18px;
 font-weight: 500;
 letter-spacing: -5%;
 cursor: pointer;
  }
`