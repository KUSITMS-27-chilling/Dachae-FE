import styled from "styled-components";

export const ReactstickyBox = styled.div`
    width: 327px;
    height: 545px;
    background-color: #F6F6F6;
    border: 1px solid #F6F6F6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: sticky;
    top: 0;
    border-radius: 10px;
    button{
        margin-top: 12Px;
        margin-left: 27px;
        width: 273px;
        height: 34px;
        background-color: #59CACB;
        border-radius: 14px;
        color: #FFFFFF;
        border: none;
        font-weight: 700;
        font-size: 17px;
        letter-spacing: -0.05em;
    }
`
export const Title = styled.div`
    margin-left: 34px;
    margin-top: 30px;
    margin-bottom: 15px;
    .phonetitle{
        font-weight: 800;
        font-size: 18px;
        letter-spacing: -5%;
    }
    textarea{
        margin-top: 15px;
        border: none;
        background-color: none;
        width: 259px;
        height: 34px;
        font-family:'Pretendard';
        font-weight: 500;
        font-size: 17px;
        resize: none;
        &::placeholder {
            color: #DADADA;
        }
    }
`
export const Email = styled.div`
    margin-left: 34px;
    margin-bottom: 16px;
    .emailtitle{
        font-weight: 600;
        font-size: 18px;
        letter-spacing: -5%;
    }
    textarea{
        font-family:'Pretendard';
        margin-top: 15px;
        border: none;
        background-color: none;
        width: 259px;
        height: 34px;
        font-weight: 500;
        font-size: 17px;
        resize: none;
        &::placeholder {
            color: #DADADA;
        }
    }
`

export const Message = styled.div`
    margin-left: 34px;
    .teachertitle{
        font-weight: 600;
        font-size: 18px;
        letter-spacing: -5%;
    }
    textarea{
        margin-top: 13px;
        border: none;
        background-color: none;
        width: 259px;
        height: 165px;
        font-weight: 500;
        font-size: 17px;
        resize: none;
    }
`

export const Line = styled.div`
    margin-top:63px;
    width: 300px;
    height: 0px;
    border: 1px solid #CBCBCB;
    margin-left: 13px;
`

export const Popup = styled.div`
    width: 277px;
    height: 130px;
    left: 971px;
    top: 1282px;
    padding: 26px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 30px;
    .popup-title{
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        text-align: center;
        margin-bottom: 14px;
    }
    .popup-sub{
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        margin-bottom: 14px;
        color: #59CACB;
    }
    .popup-content{
        font-weight: 400;
        font-size: 15px;
        color: #000000;
        text-align: center;
    }
`