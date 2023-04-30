import React from 'react'
import { BrowserRouter,Routes,Route,Router,useNavigate,Link} from 'react-router-dom';
import Login from "./Login";
import Join from "./Join";
import Mainpage from './Main/MainPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<RegisterPage />}/>
        </Routes>
    </div>
    
  );
}

export default App;