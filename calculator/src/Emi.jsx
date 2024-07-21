import React, { useState } from 'react'

function Emi() {

    const [amount,setAmount]=useState()

    const [interestRate,setInterestRate]=useState()

    const [tenure,setTenure]=useState()

    const [result,setResult]=useState()

   function calculateEmi(){
        
        let n=tenure*12

        let r=+interestRate/12

        let i=+r/100

        const emi=amount*i*((1+i)*n)/((1+i)*n - 1)

        setResult(emi)
    }

  return (
    <div>
    <div className='row mt-4'>

        <div className="col-3"></div>
        <div className="col-6 border border-3 rounded shadow p-4 ">
            <h2 className='text-center fw-bold'>Emi Calculator</h2>
            <div className="mb-3">
                <label htmlFor="">enter loan amount</label>
                <input type="text" className='form-control' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="">enter interest rate</label>
                <input type="text" className='form-control'  value={interestRate} onChange={(e)=>setInterestRate(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="">enter tenure</label>
                <input type="text" className='form-control' value={tenure} onChange={(e)=>setTenure(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="enter number1"></label>
                <button className='btn btn-primary' onClick={calculateEmi}>Calculate</button>
            </div>
             <h3>EMI : {result}</h3>
        </div>
        <div className="col-3"></div>

    </div>

</div>
    
  )
}

export default Emi