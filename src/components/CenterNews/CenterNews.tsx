import { 
  CenterNewsContainer,
  CenterNewsHeader,
  CenterSetting,
  RegionContainer,
  LearningGround,
  LearningGroundHeader,
  LearningGroundList,
  LearningGroundProgram,
  LearningGroundText
} from './CenterNews.styled';
import { LGDataArr } from '../../types/centerNews';
import { useState } from 'react';

function CenterNews({ lgData }: LGDataArr) {
  const [programs, setPrograms] = useState(lgData[0].programs);
  
  function regionClick(e: React.MouseEvent<HTMLButtonElement>) {
    const regionArr = document.querySelectorAll('.center-news__region-btn');
    regionArr.forEach((el) => {
      el.className = 'center-news__region-btn';
    });
    e.currentTarget.className = 'center-news__region-btn active';
    findPrograms(e.currentTarget.innerText);
  }

  function findPrograms(region: string) {
    lgData.forEach(el => {
      if(el.region == region) {
        setPrograms(el.programs);
        return;
      }
    })
  }

  return(
    <CenterNewsContainer>
      <CenterNewsHeader>
        <div id='center-news__header--text'>TODAY 나의 관심센터 새로운 소식</div>
        <CenterSetting>
          <div id='center-news__header--setting-text'>나의 관심센터 설정하기</div>
          <div id='center-news__header--setting-btn'>&gt;</div>
        </CenterSetting>
      </CenterNewsHeader>
      <RegionContainer>
        {
          lgData &&
          lgData.map((el, idx) => {
            if(idx == 0){
              return (
                <button className='center-news__region-btn active' onClick={regionClick} key={idx}>{el.region}</button>
              );
            }

            return (
              <button className='center-news__region-btn' onClick={regionClick} key={idx}>{el.region}</button>
            );
          })
        }
      </RegionContainer>
      <LearningGround>
        <LearningGroundHeader>
          <div id='center-news__learning-ground--circle'></div>
          <div id='center-news__learning-ground--text'>동네배움터</div>
        </LearningGroundHeader>
        <LearningGroundList>
          {
            lgData &&
            programs.map((el, idx) => (
              <LearningGroundProgram key={idx}>
                <LearningGroundText>{el.programTitle}</LearningGroundText>
                <LearningGroundText>신청 기간 {el.programPeriod}</LearningGroundText>
              </LearningGroundProgram>
            ))
          }
        </LearningGroundList>
      </LearningGround>
    </CenterNewsContainer>
  )
}

export default CenterNews;