import React from 'react'
import { createBrowserRouter , Routes , Route } from 'react-router-dom'
import MainPageUS from '../layouts/SlideBars/MainPageUS'
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPageUS/>} />
    </Routes>
  )
}

export default AppRouter