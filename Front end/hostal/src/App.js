import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './Component/Login'
import Signup from './Component/Signup'

function App () {
  return (
    
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        </BrowserRouter>

      </div>
  )
}

export default App
