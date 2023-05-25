import styled from "styled-components";
export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #91C8CA;
`
export const Content = styled.div`
  position: relative;
  //width: 1156px;
  width: max-content;
  //height: 435px;
  height: max-content;  
  margin-top: 48px;
   margin-left: 142px;
  display: flex;
`
export const TodayTeacher = styled.div`
  width: 702px;
  height: 425px;
  .buttonright{
    display: flex;
    justify-content: space-between;
  }
`
export const MyTeacher = styled.div`
  width: 350px;
  //width: max-content;
  height: 380px;
  margin-left: 110px;
`
export const TodayTitle = styled.div`
  font-weight: 700;
font-size: 21px;
letter-spacing: -0.05em;
`
export const SlideButton = styled.div`
cursor: pointer;
width: 83px;
height: 36px;
display: flex;
.carouselLeft{
  margin-right: 12px;
}
img{
  width: 35px;
height: 35.7px;
}

`
export const TodayCard = styled.div`
  margin-top: 10px;
  height: 385px;

`
export const MyTeacherTitle = styled.div`
  font-weight: 700;
font-size: 21px;
letter-spacing: -0.05em;
margin-bottom: 22px;
`
export const TeacherCard = styled.div`
cursor: pointer;
  height: 390px;
  width: 350px;
  display: flex;

`
export const SuggestPostBtnContainer = styled.div`
  width: 1156px;
  height: 2.875rem;
  position: absolute;
  //bottom: 0;
  border: 2px solid #CBCBCB;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.61);;
  background: none;
  margin-left: 142px;
  margin-top: 71px;
`
export const Stylebutton = styled.div`
cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: 2.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #Suggest-post-btn__img {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.8125rem;
  }

  #Suggest-post-btn__text {
    width: max-content;
    height: 1.75rem;
  }
`
export const TapTitle = styled.div`
position: relative;
  display: flex;
  font-weight: 700;
    font-size: 26px;
    margin-top: 169px;
    margin-left: 142px;
  .titlecolor{
    color: #59CACB;
    margin-left: 6px;
    margin-right: 6px;
  }
`
export const SuggestListContainer = styled.div`
  width: 1156px;
  height: max-content;
  position: relative;
  margin-top: 35px;
  left: 142px;
  border: 1px solid white;
`