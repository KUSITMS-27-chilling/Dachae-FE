import styled from "styled-components";

export const ProgramContainer = styled.div`
position: relative;
border: 1px solid blue;
width: 1180px;
height: 486px;
`
export const MainDetailProgramCard = styled.div`
  position: relative;
  width: 566px;
  height: 162px;
  border: 1px solid red;
  margin-right: 25px;
  .img{
    width: 112px;
    height: 112px;
    background-color: gray;
  }
  .text{
    width: 400px;
    height: 112px;
    
    margin-left: 27px;
  }
  `
export const MainDetailProgramCardContent = styled.div`
position: absolute;
border: 1px solid blue;
display: flex;
margin-top: 25px;
`
export const CardTitle = styled.div`
font-size: 21px;
font-weight: 600;
letter-spacing: -5%;

`
export const CardContent = styled.div`
margin-top: 25px;
width: 168px;
height: 27px;
`