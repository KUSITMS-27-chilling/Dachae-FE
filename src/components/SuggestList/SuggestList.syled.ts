import styled from "styled-components";

export const SuggestContainer = styled.div`
  width: 1156px;
  height: max-content;
  height: 510px;
  margin-top: 90px;
  //position: absolute;
`
export const ContentTitle = styled.div`
  width: 1156px;
  //height: max-content;
  height: 64px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  .maincategory{
    font-weight: 700;
font-size: 23px;
  }
  .subcategory{
    margin-top: 7px;
    font-weight: 500;
font-size: 18px;
color: #535353;
  }
`
export const CardContent = styled.div`
 width: 330px;
 height: 390px;
 margin-top: 84px;
  margin-right: 42px;
`
export const SlideButton = styled.div`
cursor: pointer;
width: 83px;
height: 36px;
margin-right: 11px;
display: flex;
.carouselLeft{
  margin-right: 12px;
}
img{
  width: 35px;
height: 35.7px;
}

`