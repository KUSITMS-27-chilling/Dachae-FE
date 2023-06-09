import styled from "styled-components";

export const Modal1 = styled.div`
//position: relative;
width: 800px;
height: 700px;
border-radius: 20px;
background-color: white;
padding: 42px;
`
export const MainText = styled.div`
width: max-content;
height: 29px;
font-size: 23px;
font-weight: 700;
margin-left: 330px;
margin-bottom: 34px;
`
export const Content = styled.div`
height: 520px;
width: 712px;
font-size: 21px;
font-weight: 700;
margin-left: 42px;
letter-spacing: -5%;
margin-bottom: 35px;
`
export const Title = styled.div`
margin-bottom: 11px;
justify-content: space-between;
display: flex;
div{
  margin-top: 10px;
    width: max-content;
}
textarea{
    width: 592px;
    height: 44px;
    border: 1px solid #CBCBCB;
    border-radius:10px;
    font-weight: 500;
    font-family: 'Pretendard';
font-size: 20px;
line-height: 44px;
color: #535353;
  margin-left: 36px;
}
`
export const Region = styled.div`
margin-bottom: 11px;
select{
  margin-left: 78px;
  width: 173px;
  height: 44px;
  border: 1px solid #CBCBCB;
  border-radius:10px;
    font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -5%;
}
option{
    font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -5%;
}
`     
export const Class = styled.div`
margin-bottom: 11px;
select{
  margin-left: 23px;
  width: 464px;
  height: 44px;
  border: 1px solid #CBCBCB;
  border-radius:10px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -5%;
}
option{
  
}
`
export const Day = styled.div`
margin-bottom: 11px;
select{
  margin-left: 60px;
  width: 173px;
  height: 44px;
  border: 1px solid #CBCBCB;
  border-radius:10px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -5%;

}
option{
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -5%;
}
`
export const Write = styled.div`
margin-bottom: 50px;
justify-content: space-between;
display: flex;
textarea{
  font-family: Pretendard;
    width: 587px;
    height: 273px;
    border: 1px solid #CBCBCB;
    border-radius:10px;
    font-size: 20px;
    padding: 5px;
}
`
export const Button = styled.div`
width: 458px;
height: 90px;
margin-left:170px;
position: relative;
display: flex;
`;

export const ExitBtn = styled.button `
margin-right: 24px;
background-color : white;
color: black;
border-radius: 14px;
text-decoration: none;
width: 217px;
height: 61px;
justify-content : center;
align-items : center;
font-size: 21px;
font-weight: 700;
border: 3px solid #DADADA;
`
export const SubmitBtn = styled.button`
background-color : #39AFB0;
color: white;
border-radius: 14px;
text-decoration: none;

//padding: 5px 10px;
width: 217px;
height: 61px;
display : flex;
justify-content : center;
align-items : center;
font-size: 21px;
font-weight: 700;
border: none;
`;
export const ModalBtn = styled.button`
  background-color: purple;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  width: 122px;
  height: 40px;
  margin-top: 107px;
`