import styled from "styled-components";

export const TabBarContainer = styled.div`
  width: 90rem;
  height: 4.4375rem;
  position: relative;
  box-shadow: 0px 4px 6px rgba(162, 162, 162, 0.25);
`;

export const CategoryContainer = styled.div`
  width: 32.4375rem;
  height: 2.75rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 1.6875rem;
  left: 8.875rem;

  .tab-bar__category {
    width: max-content;
    height: 2.4375rem;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: -0.05em;
    color: #b0b0b0;
    cursor: pointer;
  }

  .active {
    color: #000;
    border-bottom: 5px solid #000;
  }
`;