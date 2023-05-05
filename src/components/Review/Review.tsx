import { 
  ReviewContainer,
  ReviewProfile,
  ReviewText,
  ReviewInfo,
  ReviewContent,
  ReviewPlace,
  ReviewImage
} from "./Review.styled";

function Review() {
  // 문자열 받아서 길이가 226 넘으면 '...' 생성하고 '더보기' 추가하는 함수 필요
  // 사진 개수 세서 image-count visible 해주고 숫자 동적 반영
 
  return (
    <ReviewContainer>
      <ReviewProfile>
        <div id="review__profile-photo"></div>
        <div>
          <div id="review__profile-nickname">다채 고수</div>
          <div id="review__profile-time">18시간 전</div>
        </div>
      </ReviewProfile>
      <ReviewText>
        <ReviewInfo>
          <div id="review__info-title">&#91;1주차 후기&#93; 강의 들은 후기입니다 &#40;제목자리&#41;</div>
          <div id="review__info-lecture">신박한 정리를 위한 미니멀리즘&#40;강의명&#41;</div>
        </ReviewInfo>
        <ReviewContent>
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나
        </ReviewContent>
        <div id="review__see-more">더보기</div>
      </ReviewText>
      <ReviewPlace>
          <div id="review__place-region">&#35;은평구</div>
          <div id="review__place-detail">&#35;봉산아래공동체주택동네배움터</div>
      </ReviewPlace>
      <ReviewImage>
        <div id="review__image"></div>
        <div id="review__image-count">3</div>
      </ReviewImage>
    </ReviewContainer>
  )
}

export default Review;