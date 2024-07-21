import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import View from './components/View'
function App(){
  return (
    <div id='appBackground'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </div>
  )
}

export default App