import styled from "styled-components";

export const HeaderImg= styled.div<{img:string[]}>`
border: 1px solid black;
 width: 1156px;
 height: 352px;
 margin-top: 68px;
 margin-left: 142px;
 display: flex;
 margin-bottom: 68px;
.img1{
background-image: ${props => `url(${props.img[0]})`};
object-fit: cover;
background-size:cover;
width: 556px;
height: 352px;
margin-right: 24px;
border-radius: 10px;
 }
 .img2{
background-image: ${props => `url(${props.img[1]})`};
object-fit: cover;
background-size:cover;
width: 556px;
height: 352px;
margin-right: 24px;
border-radius: 10px;
 }
`

export const TeacherImg= styled.div<{imgSrc:string}>`
 width: 212px;
 height: 212px;
 border-radius: 90%;
margin-top: 56px;
margin-bottom: 41px;
background-image: ${props => `url(${props.imgSrc})`};
object-fit: cover;
background-size:cover;
`
export const Content= styled.div`
width: 732px;
height: 157px;
margin-bottom: 41px;
background-color: #F6F6F6;
padding: 30px;
font-weight: 500;
font-size: 21px;
letter-spacing: -0.05em;
color: #535353;

`
export const Contentclass= styled.div`
width: 732px;
height: max-content;
margin-bottom: 41px;
background-color: #F6F6F6;
padding: 30px;
font-weight: 500;
font-size: 21px;
letter-spacing: -0.05em;
color: #535353;
.subclasstitle{
    font-weight: 700;
font-size: 21px;
letter-spacing: -0.05em;
color: #535353;
margin-bottom: 11px;
}
.subclasscontent{
    margin-bottom: 25px;
}`
export const Title= styled.div`
font-weight: 500;
font-size: 21px;
margin-bottom: 24px;
display: flex;
.line-btn{
width: 5px;
height: 21px;
background-color: #59CACB;
margin-right: 19px;
}
`
export const Line = styled.div`
position: absolute;
width: 802px;
height: 0px;
left: 142px;  
border: 2px solid #F2F2F2;
`;
export const Total= styled.div`
width: 1156px;
margin-left: 142px;
height: max-content;
display: flex;
`
export const Contentleft= styled.div`
width:802px;
`
export const ContentRight= styled.div`
 width: 330px;
 margin-left: 27px;
 .fixed{
  position: fixed;
top:0;
transition: top 0.8s ease;
 }
`
export const Contentinfo= styled.div`
 width: max-content;
 display: flex;
font-size: 20px;
color: #535353;
margin-top: 15px;
margin-bottom: 30px;
`
export const Subtitle= styled.div`
 font-weight: 700;
 margin-left: 27px;
 margin-bottom: 25px;
`
export const Subcontent= styled.div`
 margin-bottom: 25px;
 margin-left: 25px;
 font-weight: 500;
`