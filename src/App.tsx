import { BrowserRouter,Routes,Route,Router,useNavigate,Link} from 'react-router-dom';

import Login from "./Login";
import Join from "./Join";

function App() {
  

  return (
    <div className='App'>
      <div className='test'>
        <Link to='/login'>로그인</Link>
      </div>
      
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<Join />}/>
        </Routes>
    </div>
    
  );
}

export default App;


