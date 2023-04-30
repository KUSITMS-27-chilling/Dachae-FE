import { BrowserRouter,Routes,Route,Router,useNavigate,Link} from 'react-router-dom';

import Login from "./Login";
import Join from "./Join";
import Mainpage from './Main/MainPage';
function App() {
  

  return (
    <div className='App'>
      
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<Join />}/>
        </Routes>
    </div>
    
  );
}

export default App;


