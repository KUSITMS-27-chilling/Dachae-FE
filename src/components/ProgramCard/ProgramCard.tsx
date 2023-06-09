import { 
  ProgramCardContainer,
  ProgramCardBottom
} from './ProgramCard.styled';
import { ProgramCardInfo } from '../../types/programCard';
import useImage from '../../hooks/useImage';
import { useEffect } from 'react';

function ProgramCard({ category, title, btnClick, deadline }: ProgramCardInfo) {
  const { imgUrl, imgHandler } = useImage(false, category);

  useEffect(() => {
    imgHandler();
  }, [])

  return (
    <ProgramCardContainer imgSrc={imgUrl}>
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