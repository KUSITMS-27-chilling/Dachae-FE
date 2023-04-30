import { 
  CenterNewsContainer,
  CenterNewsHeader,
  CenterSetting,
  RegionContainer,
  LearningGround,
  LearningGroundHeader
} from './CenterNews.styled';

function CenterNews() {
  
  function regionClick(e: React.MouseEvent<HTMLButtonElement>) {
    const regionArr = document.querySelectorAll('.center-news__region-btn');
    regionArr.forEach((el) => {
      el.className = 'center-news__region-btn';
    });
    e.currentTarget.className = 'center-news__region-btn active';
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
        <button className='center-news__region-btn' onClick={regionClick}>종로</button>
        <button className='center-news__region-btn' onClick={regionClick}>성북</button>
        {/* <RegionButton className='center-news__region-btn' onClick={regionClick}>종로</RegionButton>
        <RegionButton className='center-news__region-btn' onClick={regionClick}>성북</RegionButton> */}
      </RegionContainer>
      <LearningGround>
        <LearningGroundHeader>
          <div id='center-news__learning-ground--circle'></div>
          <div id='center-news__learning-ground--text'>동네배움터</div>
        </LearningGroundHeader>
      </LearningGround>
    </CenterNewsContainer>
  )
}

export default CenterNews;