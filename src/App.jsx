import React from 'react'
import './Css/App.css'
import Card from './Component/Card'
import AddTo from './Component/AddTo'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <Navbar />
      <div className='container topPa lg:container-lg mx-auto'>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/add' element={<AddTo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
