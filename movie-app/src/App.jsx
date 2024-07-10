import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AddMovie from './components/AddMovie'
import Home from './components/Home'
import ViewMovie from './components/ViewMovie'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view' element={<ViewMovie/>}/>
      <Route path='/add' element={<AddMovie/>}/>

    </Routes>
   </div>
  )
}

export default App
