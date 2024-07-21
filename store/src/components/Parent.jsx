import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    const[data,setData]=useState()
  return (
    <div>
        <Child1 setData={setData}></Child1>
        <Child2 data={data}></Child2>

      
    </div>
  )
}

export default Parent
