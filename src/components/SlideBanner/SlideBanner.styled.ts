import styled from "styled-components";
import banner_bg2 from '../../assets/banner_bg2.png';
import banner_bg3 from '../../assets/banner_bg3.png';

export const SBannerContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;

export const SBannerContent = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  transition: transform 0.5s ease-in-out;
  overflow: hidden;

  @keyframes floating {
    0% { transform: translate(0, 0px); }
    50%  { transform: translate(0, 17px); }
    100%   { transform: translate(0, -0px); } 
  }

  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    12.5% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-1440px);
    }
    37.5% {
      transform: translateX(-1440px);
    }
    50% {
      transform: translateX(0);
    }
    62.5% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-1440px);
    }
    87.5% {
      transform: translateX(-1440px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .main-banner__inner {
    flex: 0 0 auto;
    width: 90rem;
    height: 20rem;
    background-size: cover;
    overflow: hidden;
    animation-name: slideAnimation;
    animation-duration: 40s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }

  .main-banner__icon {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #main-banner__teacher1{
    background-image: url(${banner_bg2});
    position: relative;
  }

  #main-banner__teacher2{
    background-image: url(${banner_bg3});
    position: relative;
  }

  #main-banner__teacher-icon1 {
    width: 21rem;
    height: 21rem;
    position: absolute;
    right: 8.8125rem;
  }

  #main-banner__teacher-icon2 {
    width: 21rem;
    height: 21rem;
    position: absolute;
    right: 8.8125rem;
  }
`;