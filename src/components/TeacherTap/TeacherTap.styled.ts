import styled from "styled-components";

export const TabBarContainer = styled.div`
  width: 100%;
  height: 4.4375rem;
  position: relative;
`;

export const CategoryContainer = styled.div`
  width: 292px;
  height: 2.75rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 1.6875rem;
  left: 8.875rem;

  .tab-bar__category {
    width: 146px;
    height: 2.4375rem;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: -0.05em;
    color: #b0b0b0;
    cursor: pointer;
    text-align: center;
  }

  .active {
    color: #000;
    border-bottom: 5px solid #000;
  }
`;