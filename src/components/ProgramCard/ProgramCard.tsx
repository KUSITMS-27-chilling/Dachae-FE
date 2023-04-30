import { 
  ProgramCardContainer,
  ProgramCardBottom
} from './ProgramCard.styled';
import { ProgramCardInfo } from '../../types/programCard';

function ProgramCard({ imgSrc, title, btnClick, deadline }: ProgramCardInfo) {

  return (
    <ProgramCardContainer imgSrc={imgSrc}>
      <div id="program-card__image"></div>
      <div id="program-card__title">
        {title}
      </div>
      <ProgramCardBottom>
        <button id="program-card__btn" onClick={btnClick}>신청하기</button>
        <div id="program-card__deadline">{deadline}</div>
      </ProgramCardBottom>
    </ProgramCardContainer>
  )
}

export default ProgramCard;