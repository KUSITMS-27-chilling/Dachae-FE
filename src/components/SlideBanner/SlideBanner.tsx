import { 
  SBannerContainer,
  SBannerContent
} from "./SlideBanner.styled";
import banner_icon2 from '../../assets/banner_icon2.png';
import banner_icon3 from '../../assets/banner_icon3.png';

function SlideBanner() {

  function slide() {
    
  }

  return(
    <SBannerContainer id="main-banner__outer">
      <SBannerContent id="main-banner__inner-list">
        <div className="main-banner__inner" id="main-banner__teacher1">
          <img src={banner_icon2} alt="banner_icon2" className="main-banner__icon" id="main-banner__teacher-icon1" />
        </div>
        <div className="main-banner__inner" id="main-banner__teacher2">
          <img src={banner_icon3} alt="banner_icon3" className="main-banner__icon" id="main-banner__teacher-icon2" />
        </div>
      </SBannerContent>
    </SBannerContainer>
  )
}

export default SlideBanner;