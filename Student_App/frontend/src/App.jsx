import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import View from './components/View'
import Update from './components/Update'
function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/update' element={<Update/>}/>

      </Routes>
    </div>
  )
}

export default App