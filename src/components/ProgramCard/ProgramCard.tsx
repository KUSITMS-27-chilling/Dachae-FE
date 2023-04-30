import { 
  ProgramCardContainer,
  ProgramCardBottom
} from './ProgramCard.styled';

function ProgramCard() {
  return (
    <ProgramCardContainer>
      <div id="program-card__image"></div>
      <div id="program-card__title">
        2023 한걸음에 닿는 동네 배움터 &#91;성북 나래&#93; 프로그램 접수
      </div>
      <ProgramCardBottom>
        <button id="program-card__btn">신청하기</button>
        <div id="program-card__deadline">~05/24&#40;수&#41;</div>
      </ProgramCardBottom>
    </ProgramCardContainer>
  )
}

export default ProgramCard;