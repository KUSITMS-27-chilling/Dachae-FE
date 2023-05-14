import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewProps } from "../../types/review";
import { 
  ReviewContainer,
  ReviewProfile,
  ReviewText,
  ReviewSeeMore,
  ReviewInfo,
  ReviewContent,
  ReviewPlace,
  ReviewImage
} from "./Review.styled";

function Review({ props }: ReviewProps) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [viewContent, setViewContent] = useState('');
  const [overLength, setOverLength] = useState(false);
  const { userImg, userNick, time, title, lecture, content, region, detailPlace, reviewImg, reviewIdx, detailOrCommu } = props;

  function countImg() {
    if(reviewImg && (reviewImg?.length > 0)) {
      setCount(reviewImg.length);
      return;
    }
  }

  function checkContentLength() {
    if(content.length >= 250) {
      let tempContent = content.substring(0, 249);
      tempContent += '...';
      setViewContent(tempContent);
      setOverLength(true);
      return;
    }
    setViewContent(content);
    return;
  }

  useEffect(() => {
    countImg();
    checkContentLength();
  }, []);

  function clickReview () {
    navigate(`/commu/review/${reviewIdx}`);
    return;
  }
 
  return (
    <ReviewContainer detailOrCommu={detailOrCommu} onClick={clickReview} >
      <ReviewProfile>
        <div id="review__profile-photo"></div>
        <div>
          <div id="review__profile-nickname">{userNick}</div>
          <div id="review__profile-time">{time}</div>
        </div>
      </ReviewProfile>
      <ReviewText detailOrCommu={detailOrCommu} >
        <ReviewInfo>
          <div id="review__info-title">{title}</div>
          <div id="review__info-lecture">{lecture}</div>
        </ReviewInfo>
        <ReviewContent detailOrCommu={detailOrCommu} >
          {viewContent}
        </ReviewContent>
        {
          overLength == true ?
          <ReviewSeeMore seeMore={true} >더보기</ReviewSeeMore>
          :
          <ReviewSeeMore>더보기</ReviewSeeMore>
        }
      </ReviewText>
      <ReviewPlace>
          <div id="review__place-region">&#35;{region}</div>
          <div id="review__place-detail">&#35;{detailPlace}</div>
      </ReviewPlace>
      {
        reviewImg &&
          <ReviewImage reviewImg={reviewImg[0]} >
            <div id="review__image"></div>
            <div id="review__image-count">{count}</div>
          </ReviewImage>
      }
      {
        !reviewImg &&
        <ReviewImage>
          <div id="review__image"></div>
          <div id="review__image-count">{count}</div>
        </ReviewImage>
      }
    </ReviewContainer>
  )
}

export default Review;