import './App.css'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import First from './component/First'
import Reg from './component/Reg'
import TableC from './component/TableC'
import StateBasic from './component/StateBasic'
import New from './component/New'
import FormBasics from './component/FormBasics'
import ApiGet from './component/ApiGet'
import Jewelery from './component/Jewelery'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/n' element={<StateBasic/>}/>
      <Route path = '/l' element={<First n = 'albin' data={{name:'Adi',age:21,cls : 'R4A'}}/>}/>
      <Route path = '/r' element={<Reg/>}/>
      <Route path = '/t' element={<TableC/>}/>
      <Route path = '/' element={<New/>}/>
      <Route path = '/f' element={<FormBasics/>}/>
      <Route path = '/a' element={<ApiGet/>}/>
      <Route path = '/j' element={<Jewelery/>}/>
    </Routes>
    </>
  )
}

export default App
