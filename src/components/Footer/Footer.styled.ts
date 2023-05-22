import styled from "styled-components";

export const FooterContainer = styled.div<{ imgSrc: string }>`
  width: 90rem;
  height: 16.875rem;
  background-image: ${props => `url(${props.imgSrc})`};
  background-size: cover;
`;