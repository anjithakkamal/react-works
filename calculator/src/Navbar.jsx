import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='d-flex justify-content-evenly mb-3 bg-warning p-3'>

    <Link to={"/counter"}>
        <button className='btn btn-outline-dark'>Counter</button>
    </Link>

    <Link to={"/addition"}>
    <button className='btn btn-outline-dark'>Addition</button>
    </Link>

    <Link to={"/subtraction"}>
    <button className='btn btn-outline-dark'>Subtraction</button>
    </Link>
    
    <Link to={"/temperature"}>
    <button className='btn btn-outline-dark'>Temparature</button>
    </Link>

    <Link to={"/emi"}>
    <button className='btn btn-outline-dark'>Emi</button>
    </Link>

    <Link to={"/bmi"}>
    <button className='btn btn-outline-dark'>Bmi</button>
    </Link>

    <Link to={"/calorie"}>
    <button className='btn btn-outline-dark'>Calorie</button>
    </Link>
</div>
  )
}

export default Navbar
