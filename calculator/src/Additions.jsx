import React, { useState } from 'react'

function Additions() {

    const [num1,setNum1]=useState(0)

    const [num2,setNum2]=useState(0)

    const [result,setResult]=useState(0)

    // function handleNum1(event){

    //     setNum1(+event.target.value)
    // }

    // function handleNum2(event){

    //     setNum2(+event.target.value)
    // }

    // function handleAdd(event){

    //     setResult(num1+num2)
    // }

  return (
    <div>
        <div className='row mt-4'>

            <div className="col-3"></div>
            <div className="col-6 border border-3 rounded shadow p-4 ">
                <h2 className='text-center fw-bold'>Addition</h2>
                <div className="mb-3">
                    <label htmlFor="">enter number1</label>
                    <input type="text" className='form-control' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">enter number2</label>
                    <input type="text" className='form-control' value={num2} onChange={(e)=>setNum2(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="enter number1"></label>
                    <button className='btn btn-primary' onClick={()=>setResult((+num1)+(+num2))}>Add</button>
                </div>
                <h1>Result={result}</h1>
            </div>
            <div className="col-3"></div>

        </div>

    </div>
  )
}

export default Additions