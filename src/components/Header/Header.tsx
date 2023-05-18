import styled from "styled-components";
import { 
  HeaderContainer,
  SearchInputContainer,
  NotifyProfileContainer,
  ProfileContainer
} from './Header.styled';
import logo_icon from '../../assets/logo_icon.png';
import search_icon from '../../assets/search_icon.png';
import notification_icon from '../../assets/notification_icon.png';
import profile_icon from '../../assets/profile_icon.png';
import polygon_icon from '../../assets/polygon_icon.png';
import { useNavigate } from "react-router-dom";

function Header(props: any) {
  const navigate = useNavigate();

  function goMain() {
    navigate('/');
  }

  function goLogin() {
    navigate('/login');
  }

  return(
    <HeaderContainer>
      <img src={logo_icon} alt="logo_icon" id="header__logo" onClick={goMain}/>
      <SearchInputContainer>
        <img src={search_icon} alt="search_icon" id="header__search--icon" />
        <input type="text"
            placeholder="내 주위의 센터를 검색해보세요"
            id="header__search--form" />
      </SearchInputContainer>
      <NotifyProfileContainer>
        <img src={notification_icon} 
            alt="notification_icon" 
            id="header__notification"
            className="header__notify--profile"
            onClick={goLogin} />

        <ProfileContainer>
          <img src={profile_icon} 
              alt="profile_icon" 
              id="header__profile"
              className="header__notify--profile"
              onClick={goLogin} />
          <img src={polygon_icon} 
              alt="polygon_icon" 
              id="header__polygon"
              className="header__notify--profile" />
        </ProfileContainer>
      </NotifyProfileContainer>
    </HeaderContainer>
  );
}

export default Header;