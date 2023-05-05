import { useEffect, useState } from "react";
import { ReviewProps } from "../../types/review";
import { 
  ReviewContainer,
  ReviewProfile,
  ReviewText,
  ReviewInfo,
  ReviewContent,
  ReviewPlace,
  ReviewImage
} from "./Review.styled";

function Review({ props }: ReviewProps) {
  const [count, setCount] = useState(0);
  const { userImg, userNick, time, title, lecture, content, region, detailPlace, reviewImg } = props;
  // 문자열 받아서 길이가 226 넘으면 '...' 생성하고 '더보기' 추가하는 함수 필요

  function countImg() {
    if(reviewImg && (reviewImg?.length > 0)) {
      const imgCount = document.getElementById('review__image-count');
      setCount(reviewImg.length);
      return;
    }
  }

  useEffect(() => {
    countImg();
  }, []);
 
  return (
    <ReviewContainer>
      <ReviewProfile>
        <div id="review__profile-photo"></div>
        <div>
          <div id="review__profile-nickname">{userNick}</div>
          <div id="review__profile-time">{time}</div>
        </div>
      </ReviewProfile>
      <ReviewText>
        <ReviewInfo>
          <div id="review__info-title">{title}</div>
          <div id="review__info-lecture">{lecture}</div>
        </ReviewInfo>
        <ReviewContent>
          {content}
        </ReviewContent>
        <div id="review__see-more">더보기</div>
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