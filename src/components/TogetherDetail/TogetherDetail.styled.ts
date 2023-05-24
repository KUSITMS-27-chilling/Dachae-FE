import styled from "styled-components";
export const CardForm = styled.div`
 position: relative;
 width: 920px;
 height: 523px;
 border-radius: 18px;
 box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
 margin: 20px;//확인하려고 그냥 넣음
`
export const CardTop = styled.div<{ profile: string, gradeImg: string }>`
    position: absolute;
    width: 795px;
    height: 57px;
    margin-top: 44px;
    margin-left: 58px;
    display: flex;
    .profile{
        width: 57px;
        height: 57px;
        border-radius: 90px;
        background-image: ${props => `url(${props.profile})`};
        object-fit: cover;
        background-size:cover;
    }
    .right{
        width: 711px;
        height: 57px;
        margin-left:20px;
    }
    .user-title{
        display: flex;
    }
    .user-name{
        height: 24px;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: -0.05em;
    }
    .user-grade{
        margin-left: 6px;
        width: 24px;
        height: 24px;
        background-image: ${props => `url(${props.gradeImg})`};
        object-fit: cover;
        background-size:cover;
    }
    .tag-category-box{
        display: flex;
        line-height:27px;
    }
    .tag-day{
        margin-top: 6px;
        width: 711px;
        height: 27px;
        display: flex;
        justify-content: space-between;
    }
    .tag-category{
        width: 70px;
        height: 27px;
        background: #D9D9D9;
        border-radius: 26px;
        text-align: center;
        margin-right: 12px;
        padding-left: 15px;
        padding-right:15px;
    }
    .day{
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        letter-spacing: -0.05em;
        color: #7D7D7D;
    }
`

export const Line = styled.div`
    position: absolute;
    width: 808px;
    height: 0px;
    border: 1px solid #CBCBCB;
    margin-top: 123px;
    margin-left: 56px;
`

export const CardTitle = styled.div`
    position: absolute;
    width: 381px;
    height: 58px;
    margin-top: 148px;
    margin-left: 56px;
    .content-title{
        font-weight: 700;
        font-size: 21px;
        height: 25px;
    }
`
export const CardContent = styled.div`
    position: absolute;
    width: 463px;
    height: 156px;
    font-weight: 500;
    font-size: 19px;
    margin-top: 211px;
    margin-left: 56px;
`
export const CardTag = styled.div`
    position: absolute;
    width: 446px;
    height: 33px;
    margin-top: 376px;
    margin-left: 54px;
    display: flex;
    justify-content: space-between;


    .className{
        height: 33px;
        background: #F6F6F6;
        border-radius: 26px;
        font-weight: 500;
        font-size: 19px;
        color: #535353;
        padding-left:15px;
        padding-right: 15px;
        line-height: 33px;
    }
`
export const JoinPeople = styled.div`
    height: 29px;
    font-weight: 600;
    font-size: 24px;
    color: #7d7d7d; 
    display: flex;
    .join{
        color: #39AFB0;
    }
    .goal{
    }
`
export const TogetherBtn = styled.div`
    position: absolute;
    width: 810px;
    height: 50px;
    background: #39AFB0;
    border-radius: 13.7647px;
    margin-top: 430px;
    margin-left: 54px;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: -0.05em;
    color: #FFFFFF;
    text-align: center;
`
export const CurrentJoinPeople = styled.div`
position: absolute;
width: max-content;
height: 114px;
background: #FFFFFF;
border: 2px solid #CBCBCB;
box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
border-radius: 7px;
margin-left: 593px;
margin-top: 300px;
padding-left:12px;
padding-right: 8px;
.current-join{
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.05em;
color: #7D7D7D;
margin-top: 14px;
display: flex;
padding-right:12px;
justify-content: center;
}
.num-color{
    color: #39AFB0;
}
.user-profile{
    width: max-content;
    height: max-content;
    margin-top: 13px;
    //margin-left: 2px;
    display: flex;
    .user-name{
     margin-right: 5px;
     border: 1px solid black;
     .name{
  font-weight: 500;
  font-size: 19px;
  text-align: center;
  color: #535353;
     }
    img{
        margin-left: 7px;
        width: 32px;
        height: 32px;
        border-radius: 50%;

    }
`
