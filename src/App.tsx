import React from 'react'
import { BrowserRouter,Routes,Route,Router,useNavigate,Link} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import GlobalFonts from './fonts/fonts';
import Login from "./components/Login/Login";
import Mainpage from './pages/Main/MainPage';
import RegisterPage from './pages/RegisterPage';
import Mypage from './pages/Mypage/MypagePage';
import SuggestPage from './pages/Suggest/SuggestPage';
import CommunityPage from './pages/Commu/CommunityPage';
import MainPageDetail from './pages/Main/MainPageDetail';
import RevieDetailPage from './pages/ReviwDetail/RevieDetailPage';
import TogetherDetailPage from './pages/TogetherDetail/TogetherDetailPage';


function App() {
  return (
    <RecoilRoot>
    <div className='App'>
      <GlobalStyle />
      <GlobalFonts />
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<RegisterPage />}/>
          <Route path="/suggest" element={<SuggestPage />}/>
          <Route path="/commu" element={<CommunityPage />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/:region" element={<MainPageDetail />}/>
          <Route path="/commu/review/:programIdx" element={<RevieDetailPage />}/>
          <Route path="/commu/together/:listenIdx" element={<TogetherDetailPage />}/>
        </Routes>
    </div>
    </RecoilRoot>
  );
}

export default App;