import styled from "styled-components";

export const CommuTabContainer = styled.div`
  width: 13.25rem;
  height: 11.75rem;
  position: absolute;
  top: 31.6875rem;
  left: 8.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .active {
    background-color: rgba(89, 199, 200, 0.4);
    color: #000;
  }
`;

export const CommuTabBtn = styled.div`
  width: 13.25rem;
  height: 3.75rem;
  border: 0;
  border-radius: 0.6rem;
  font-size: 20px;
  font-weight: 600;
  color: #535353;
  background-color: #fff;
  letter-spacing: -0.05em;
  line-height: 3.75rem;
  padding-left: 1rem;
  cursor: pointer;
`;