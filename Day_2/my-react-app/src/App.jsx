import './App.css'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import First from './component/First'
import Reg from './component/Reg'
import TableC from './component/TableC'
import { Table } from '@mui/material'
import StateBasic from './component/StateBasic'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element={<StateBasic/>}/>
      <Route path = '/l' element={<First/>}/>
      <Route path = '/r' element={<Reg/>}/>
      <Route path = '/t' element={<TableC/>}/>
    </Routes>
    </>
  )
}

export default App
