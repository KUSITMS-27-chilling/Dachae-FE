import styled from "styled-components";
export const CardForm = styled.div`
 position: relative;
 width: 920px;
 height: 615px;
 border-radius: 18px;
 box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
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
        background-size: cover;
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
        background-size: cover;
        z-index: 1;
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
height: 58px;
margin-top: 148px;
margin-left: 56px;
.content-title{
    font-weight: 700;
    font-size: 21px;
    height: 25px;
}
.content-classname{
    height: 21px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 12px;
}
`
export const CardContent = styled.div<{img:string}>`
    position: absolute;
    //border: 1px solid black;
    width: 815px;
    height: 312px;
    margin-top: 240px;
    margin-left: 56px;
    display: flex;
    .img{
        background-image: ${props => `url(${props.img})`};
        object-fit: cover;
        background-size:cover;
        width: 312px;
        height: 312px;
        border-radius: 8px;
    }
    .content-tag{
        //border: 1px solid blue;
        width: 470px;
        height: 312px;
        margin-left: 37px;
    }
    .content{
        width: 470px;
        height: 260px;
        font-weight: 500;
        font-size: 18px;
        padding-right:5px;
        overflow: auto;
    }
    .tag{
        width: 382px;
        height: 33px;
        margin-top: 15px;
        display: flex;
        text-align: center;
        line-height: 33px;
        font-size: 19px;
    }
    .tag-region{
        width: 94px;
        height: 33px;
        background: #E9F8F1;
        border-radius: 26px;
        color: #39AFB0;
        font-weight: 700;
    }
    .tag-center{
        height: 33px;
        background: #F6F6F6;
        border-radius: 26px;
        margin-left: 14px;
        padding-right: 10px;
        padding-left: 10px;
        color: #7D7D7D;
        font-weight: 500;
    }
`