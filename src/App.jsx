
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import VideoComp from './components/VideoComp'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:roomID' element={<VideoComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
