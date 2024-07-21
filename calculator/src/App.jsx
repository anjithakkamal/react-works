import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Additions from './Additions'
import Bmi from './Bmi'
import Calorie from './Calorie'
import Counter from './Counter'
import Emi from './Emi'
import Navbar from './Navbar'
import Substration from './Substration'
import Temperature from './Temperature'


function App() {
  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <Additions></Additions>
      <Substration></Substration> */}
      {/* <Temperature></Temperature> */}
     

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>

        <Route path='addition' element={<Additions></Additions>}></Route>

        <Route path='subtraction' element={<Substration></Substration>}></Route>

        <Route path='counter' element={<Counter></Counter>} ></Route>

        <Route path='Temperature' element={<Temperature></Temperature>}></Route>

        <Route path='emi' element={<Emi></Emi>}></Route>

        <Route path='bmi' element={<Bmi></Bmi>}></Route>

        <Route path='calorie' element={<Calorie></Calorie>}></Route>

      </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
