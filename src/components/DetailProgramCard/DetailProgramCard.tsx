import { 
  DetailProgramCardContainer,
  MainDetailProgramCardContent,
  CardTitle,
  CardContent,
  Button
} from "./DetailProgramCard.styled";
import useImage from '../../hooks/useImage';
import { useEffect } from "react";

interface Program {
  programName: string;
  category:string;
  url:string;
};

function DetailProgramCard({ card }: { card: Program }) {
  const { imgUrl, imgHandler } = useImage(true, card.category);

  useEffect(() => {
    imgHandler();
  }, [])

  return(
    <DetailProgramCardContainer>
      <MainDetailProgramCardContent imgSrc={imgUrl} >
        <div className='img'></div>
        <div className='text'>
            <CardTitle>{card.programName}</CardTitle>
            <CardContent>
                <div className='category'># {card.category}</div>
                <Button>
                  <div className='Btn' onClick={() => window.open(card.url, "_blank")} >신청페이지 바로가기 &gt;</div>
                </Button>
            </CardContent>
        </div>
      </MainDetailProgramCardContent>
    </DetailProgramCardContainer>
  )
}

export default DetailProgramCard;