import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
