import React, { useState } from 'react'

function Bmi() {

  const [bmiData,setBmiData]=useState({height:0,weight:0,result:0})

  function handleClick(){

    let bmi=bmiData.weight/(bmiData.height/100)**2

    setBmiData({...bmiData,result:bmi})
  }





  return (
    <div>
        <div className='row mt-4'>

            <div className="col-3"></div>
            <div className="col-6 border border-3 rounded shadow p-4 ">
                <h2 className='text-center fw-bold'>BMI</h2>
                <div className="mb-3">
                    <label htmlFor="">enter height</label>
                    <input type="text" className='form-control' onChange={(e)=>setBmiData({...bmiData,height:+e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">enter weight</label>
                    <input type="text" className='form-control'  onChange={(e)=>setBmiData({...bmiData,weight:+e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="enter number1"></label>
                    <button className='btn btn-primary' onClick={handleClick} >Calculate</button>
                </div>
                <h1>BMI :{bmiData.result}</h1>

            </div>
            <div className="col-3"></div>

        </div>

    </div>
  )
}

export default Bmi