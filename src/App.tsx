import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from "./Login";
function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Login/>
    </div>
  )
}

export default App


