import { useState } from 'react'
import './App.css'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login/>}  />
          <Route path="*" element={<>NOT FOUND</>}  />

          <Route path="/dashboard" element={<Dashboard/>}  />
          
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
