import React from 'react'
import { BrowserRouter,Routes,Route,Router,useNavigate,Link} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import Login from "./components/Login/Login";
import Mainpage from './pages/Main/MainPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<RegisterPage />}/>
        </Routes>
    </div>
    
  );
}

export default App;