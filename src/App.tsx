import React from 'react'
import { BrowserRouter,Routes,Route,Router,useNavigate,Link} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import Login from "./components/Login/Login";
import Mainpage from './pages/Main/MainPage';
import RegisterPage from './pages/RegisterPage';
import Mypage from './pages/Mypage/MypagePage';
import SuggestPage from './pages/Suggest/SuggestPage';
import CommunityPage from './pages/Commu/CommunityPage';
import MainPageDetail from './pages/Main/MainPageDetail';
import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <GlobalFonts/>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<RegisterPage />}/>
          <Route path="/suggest" element={<SuggestPage />}/>
          <Route path="/commu" element={<CommunityPage />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/mainDetail" element={<MainPageDetail />}/>
        </Routes>
    </div>
    
  );
}

export default App;