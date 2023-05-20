import { 
  MBannerContainer,
  MBannerContent
} from "./MainBanner.styled";
import { BannerType } from "../../types/banner";
import banner_icon1 from '../../assets/banner_icon1.png';
import banner_icon2 from '../../assets/banner_icon2.png';
import banner_icon3 from '../../assets/banner_icon3.png';
import banner_icon4 from '../../assets/banner_icon4.png';
import banner_icon5 from '../../assets/banner_icon5.png';

function MainBanner({ bannerType }: { bannerType: BannerType}) {

  return(
    <MBannerContainer id="main-banner__outer">
      <MBannerContent id="main-banner__inner-list">
        {
          (bannerType == 'mainBanner') && (
            <div className="main-banner__inner" id="main-banner__main">
              <img src={banner_icon1} alt="banner_icon1" className="main-banner__icon" id="main-banner__main-icon"></img>
            </div>
          )
        }
        {
          (bannerType == 'teacherBanner') && (
            <>
              <div className="main-banner__inner" id="main-banner__teacher1">
                <img src={banner_icon2} alt="banner_icon2" className="main-banner__icon" id="main-banner__teacher-icon1" />
              </div>
              <div className="main-banner__inner" id="main-banner__teacher2">
                <img src={banner_icon3} alt="banner_icon3" className="main-banner__icon" id="main-banner__teacher-icon2" />
              </div>
            </>
          )
        }
        {
          (bannerType == 'reviewBanner') && (
            <div className="main-banner__inner" id="main-banner__review">
              <img src={banner_icon5} alt="banner_icon5" className="main-banner__icon" id="main-banner__review-icon"></img>
            </div>
          )
        }
        {
          (bannerType == 'listenBanner') && (
            <div className="main-banner__inner" id="main-banner__listen">
              <img src={banner_icon4} alt="banner_icon4" className="main-banner__icon" id="main-banner__listen-icon"></img>
            </div>
          )
        }
      </MBannerContent>
    </MBannerContainer>
  )
}

export default MainBanner;