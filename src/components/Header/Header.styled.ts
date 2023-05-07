import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  position: relative;

  #header__logo {
    width: 4.9375rem;
    height: 2.2675rem;
    position: absolute;
    left: 8.875rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const SearchInputContainer = styled.div`
  width: 21.0625em;
  height: 2.375em;
  background-color: #eee;
  border-radius: 1.25em;
  position: absolute;
  left: 16.1875rem;
  top: 1.25rem;

  #header__search--icon {
    position: absolute;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
  }

  #header__search--form {
    width: 19em;
    border: 0;
    padding: 0;
    background-color: #eee;
    font-family: Pretendard;
    font-weight: 600;
    font-size: 13px;
    position: absolute;
    left: 4em;
    top: 50%;
    transform: translateY(-50%);
    outline: none;
  }
`;

export const NotifyProfileContainer = styled.div`
  width: 6.375rem;
  height: 1.9813rem;
  position: absolute;
  right: 8.875rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;

  #header__notification {
    width: 1.368125em;
    height: 1.60375em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 3em;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 3.2781em;
  height: 1.9813em;

  #header__profile {
    width: 2.028125em;
    height: 1.98125em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  #header__polygon {
    width: 1em;
    height: 0.5625em;
    position: absolute;
    top: 50%;
    right: 0.1em;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;