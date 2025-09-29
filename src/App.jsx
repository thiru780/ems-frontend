import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { EmployeeComponent } from './Component/EmployeeComponent'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListEmployeeComponent/>}></Route>

      
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

     
       <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
   
     </Routes>

     </BrowserRouter>
     </>
  )
}

export default App
