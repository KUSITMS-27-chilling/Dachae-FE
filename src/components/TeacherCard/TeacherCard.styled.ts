import styled from "styled-components";

export const TeacherCardBox = styled.div`
margin-left: 3px;
margin-top: 15px;
width: 330px;
height: 350px;
background: #FFFFFF;
box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 0.15);
border-radius: 20px;
margin-right: 42px;
transition: all 0.3s ease-in-out; 
&:hover{
    transform: scale(1.1);
  }
`
export const CardTop = styled.div`
position: relative;
width: 330px;
height: 104px;
.title{
position: absolute;
font-weight: 700;
font-size: 23px;
margin-left: 30px;
color: #000000;
margin-top: 29PX;
}
.catedory{
position: absolute;
font-weight: 500;
font-size: 18px;
color: #535353;
margin-top: 63px;
margin-left: 30px;
}
`
export const Line = styled.div`
width: 330px;
height: 0px;
border: 1px solid #CBCBCB;
`
export const Img = styled.div<{imgSrc:string}>`
 width: 107px;
    height: 107px;
    margin-top: 15px;
    border-radius: 90PX;
background-image: ${props => `url(${props.imgSrc})`};
object-fit: cover;
background-size:cover;
.user-img{
}
`
export const CardContent = styled.div`
width: 330px;
height: 122px;
display: flex;
.user-info{
    margin-right: 84px;
    margin-left: 32px;
    margin-top: 39px;
}
.name{
    font-weight: 700;
font-size: 20px;
color: #39AFB0;
}
`
export const Career = styled.div`
display: flex;
font-size: 18px;
margin-top: 5px;
.carrer{
    color: #B0B0B0;
    font-weight: 600;
    margin-right: 3px;
}
.month{
    color: #535353;
    font-weight: 500;
}
`
export const CardEnd = styled.div`
width: 270px;
margin-left: 32px;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color: #535353;
margin-top: 26px;
`
