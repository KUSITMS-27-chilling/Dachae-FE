import { ReviewContainer } from "./Review.styled";

function Review() {
  return (
    <ReviewContainer>
      <div id="review__profile">
        <div id="review__profile-photo"></div>
        <div>
          <div id="review__profile-nickname">다채고수</div>
          <div id="review__profile-time">18시간 전</div>
        </div>
      </div>
      <div id="review__text">
        <div id="review__info">
          <div id="review__info-title">&#91;1주차 후기&#93; 강의 들은 후기입니다 &#40;제목자리&#41;</div>
          <div id="review__info-lecture">신박한 정리를 위한 미니멀리즘&#40;강의명&#41;</div>
        </div>
        <div id="review__content">
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다
          가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 가 나 다 
        </div>
        <div id="review__see-more">더보기</div>
        <div id="review__place">
          <div id="review__place-region">&#35;은평구</div>
          <div id="review__place-detail">&#35;봉산아래공동체주택동네배움터</div>
        </div>
      </div>
      <div id="review__image">
        {/* <img src=""></img> */}
        <div id="review__image-count"></div>
      </div>
    </ReviewContainer>
  )
}

export default Review;