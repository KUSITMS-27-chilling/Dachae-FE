import styled from "styled-components";
export const Myinfo = styled.div`
position: relative;
width: 1156px;
height: 415px;
margin-left: 142px;
margin-top: 53px;
background: #FFFFFF;
box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
border-radius: 18px;
.title{
    position: absolute;
font-weight: 700;
font-size: 26px;
letter-spacing: -0.05em;
color: #000000;
margin-top: 32px;
margin-left: 53px;
}
`
export const My = styled.div`
display: flex;
margin-top: 76px;
margin-left: 142px;
height: 1000px;
`
export const MyWrite = styled.div`
width: 566px;
height: 446px;
background: #FFFFFF;
box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
border-radius: 18px;
margin-right: 26px;
.mytitle{
position: absolute;
font-weight: 700;
font-size: 26px;
letter-spacing: -0.05em;
color: #000000;
margin-top: 32px;
margin-left: 54px;
}
.sub{
  margin-top: 20px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: max-content;
    width: 458px;
    font-weight: 500;
font-size: 21px;
color: #000000;
}
`
export const Content = styled.div`
cursor:pointer;
height: max-content;
    width: 458px;
    border: 1px solid white;
    margin-top: 88px;
    margin-left: 54px;
    margin-top: 88px;
    margin-left: 54px;
    .sub{
      font-family: 'Pretendard';
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: max-content;
    width: 458px;
    font-weight: 500;
font-size: 21px;
color: #000000;
margin-top: 20px;
}
`
export const Line = styled.div`
width: 457px;
height: 0px;
border: 2px solid #CBCBCB;
margin-top: 57px;
`
export const Myapply = styled.div`
width: 566px;
height: 446px;
background: #FFFFFF;
box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
border-radius: 18px;
.appplytitle{ 
position: absolute;
font-weight: 700;
font-size: 26px;
letter-spacing: -0.05em;
color: #000000;
margin-top: 32px;
margin-left: 54px;
}

`


export const Info = styled.div`
position: absolute;
display: flex;
margin-top: 98px;
`
export const Profile = styled.div`
position: absolute;
width: 118px;
height: 118px;
box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
margin-left: 54px;
border-radius: 50%;
 background-size:cover;
object-fit: cover;
.userimg{
 width: 118px;
height: 118px;
border-radius: 50%;
}
.user-fix{
  font-weight: 500;
font-size: 14px;
letter-spacing: -0.05em;
color: #7D7D7D;
text-decoration-line: underline;
margin-top: 14px;
margin-left: 35px;
cursor:pointer;
}
`
export const User = styled.div`
position: absolute;
width: 900px;
height: 270px;
margin-left: 236px;
`
export const Nickname = styled.div`
justify-content: space-between;
width: 213px;
display: flex;
.user-name-fix{
    display: flex;
}
.user-name-title{
font-weight: 700;
font-size: 17px;
letter-spacing: -0.05em;
color: #000000;
margin-bottom: 44px;
}`
export const Contentflex = styled.div`
display: flex;
.user-fix{
cursor:pointer;
font-weight: 500;
font-size: 14px;
letter-spacing: -0.05em;
text-decoration-line: underline;
color: #7D7D7D;
line-height: 27px;
margin-left: 6px;
}
.category{
height: 27px;
width: max-content;
padding-left:15px;
padding-right: 15px;
background: #D9D9D9;
border-radius: 26px;
font-weight: 500;
font-size: 16px;
line-height: 27px;
color: #535353;
margin-right: 10px;
}
 #learning-grade__progress-bar {
    width: 590px;
    height: 14px;
    appearance: none;
    background-color: gray;
  }

  #learning-grade__progress-bar::-webkit-progress-bar {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #d9d9d9;
  }

  #learning-grade__progress-bar::-webkit-progress-value {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #66dccf;
  }

  #learning-grade__level-text{
    width: 17rem;
    height: 1.125rem;
    display: flex;
    color: #535353;
    font-size: 15px;
    font-weight: 500;
  }
`
export const Contentflexuser = styled.div`
display: flex;
.user-fix{
cursor:pointer;
font-weight: 500;
font-size: 14px;
letter-spacing: -0.05em;
text-decoration-line: underline;
color: #7D7D7D;
line-height: 20px;
margin-left: 6px;
}
.user-name{
font-weight: 400;
font-size: 17px;
letter-spacing: -0.05em;
color: #000000;
margin-right: 10px;
}
`
export const Contentflexgrade = styled.div`
 #learning-grade__progress-bar {
  margin-top: 5px;
    width: 590px;
    height: 14px;
    appearance: none;
   background: #D9D9D9;
border-radius: 10px;
  }

  #learning-grade__progress-bar::-webkit-progress-bar {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #d9d9d9;
  }

  #learning-grade__progress-bar::-webkit-progress-value {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #66dccf;
  }

  #learning-grade__level-text{
    display: flex;
    font-weight: 400;
font-size: 17px;
line-height: 20px;
letter-spacing: -0.05em;
margin-top: 13px;
color: #535353;

  }
`
export const Grade = styled.div`
display: flex;
width: max-content;
.grade-img{
  margin-left: 13px;
  height: 45px;
  width: 45px;
  img{
     width: 44px;
     height: 42px;
     
  }
  .grade-text{
font-weight: 500;
font-size: 13px;
letter-spacing: -0.05em;
color: #535353;
text-align: center;
  }
}
.user-grade{
    font-weight: 700;
font-size: 17px;
letter-spacing: -0.05em;
color: #000000;
margin-bottom: 62px;
margin-top: 13px;
}
#learning-grade__grade-top {
    width: 590px;
    height: 64px;
    display: flex;
    justify-content: space-between; 
    margin-left: 37px;
    margin-top: 13px;
  }
`

export const Category = styled.div`
//justify-content: space-between;
display: flex;
width: max-content;
.user-category{
font-weight: 700;
font-size: 17px;
letter-spacing: -0.05em;
color: #000000;
margin-bottom: 47px;
margin-right: 37px;
}
`
export const LearningGradeBar = styled.div`
  width: 17rem;
  height: 1.875rem;
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  #learning-grade__progress-bar {
    width: 16.9375rem;
    height: 0.375rem;
    appearance: none;
  }

  #learning-grade__progress-bar::-webkit-progress-bar {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #d9d9d9;
  }

  #learning-grade__progress-bar::-webkit-progress-value {
    width: 16.9375rem;
    height: 0.375rem;
    background-color: #66dccf;
  }

  #learning-grade__level-text{
    width: 17rem;
    height: 1.125rem;
    display: flex;
    justify-content: space-between;
    color: #535353;
    font-size: 15px;
    font-weight: 500;
  }
`;
export const FavField = styled.div`
//justify-content: space-between;
display: flex;
width: max-content;
.user-FavField{
font-weight: 700;
font-size: 17px;
letter-spacing: -0.05em;
color: #000000;
margin-right: 37px;
}
`
