import styled from "styled-components";
import banner_bg1 from '../../assets/banner_bg1.png';
import banner_bg4 from '../../assets/banner_bg4.png';
import banner_bg5 from '../../assets/banner_bg5.png';

export const MBannerContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;

export const MBannerContent = styled.div`
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

  .main-banner__inner {
    flex: 0 0 auto;
    width: 90rem;
    height: 20rem;
    background-size: cover;
    overflow: hidden;
  }

  .main-banner__icon {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #main-banner__main {
    width: 90rem;
    height: 20rem;
    background-image: url(${banner_bg1});
    overflow: hidden;
  }

  #main-banner__review {
    width: 90rem;
    height: 20rem;
    background-image: url(${banner_bg5});
    overflow: hidden;
    position: relative;
  }

  #main-banner__listen {
    width: 90rem;
    height: 20rem;
    background-image: url(${banner_bg4});
    overflow: hidden;
    position: relative;
  }

  #main-banner__main-icon {
    width: 21rem;
    height: 22rem;
    position: absolute;
    top: 6.5rem;
    right: 3.6875rem;
  }

  #main-banner__review-icon {
    width: 18.01rem;
    height: 17.1875rem;
    position: absolute;
    top: 4.5rem;
    right: 11.4725rem;
  }

  #main-banner__listen-icon {
    width: 12rem;
    height: 18.0325rem;
    position: absolute;
    top: 2.5rem;
    right: 5.745625rem;
    transform: rotate(3.05deg);
  }
`;