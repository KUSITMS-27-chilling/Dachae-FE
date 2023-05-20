import styled from "styled-components";
export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #91C8CA;
`
export const Content = styled.div`
  position: relative;
  width: 1156px;
  height: 416px;
  margin-top: 48px;
   margin-left: 142px;
  display: flex;
`
export const TodayTeacher = styled.div`
  border: 1px solid red;
  width: 702px;
  height: 416px;
`
export const MyTeacher = styled.div`
  border: 1px solid red;
  width: 330px;
  height: 416px;
  margin-left: 124px;
`
export const TodayTitle = styled.div`
  font-weight: 700;
font-size: 21px;
letter-spacing: -0.05em;
`
export const TodayCard = styled.div`
  margin-top: 34px;
`
export const MyTeacherTitle = styled.div`
  font-weight: 700;
font-size: 21px;
letter-spacing: -0.05em;
`
export const TeacherCard = styled.div`
  margin-top: 5px;
  display: flex;
`
export const SuggestPostBtnContainer = styled.div`
  width: 1156px;
  height: 2.875rem;
  position: absolute;
  bottom: 0;
  border: 2px solid #CBCBCB;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.61);;
  background: none;
  margin-left: 142px;
`
export const Stylebutton = styled.div`
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
  }
`
export const SuggestListContainer = styled.div`
  width: 1156px;
  height: max-content;
  position: relative;
  margin-top: 35px;
  left: 142px;
  border: 1px solid red;
`