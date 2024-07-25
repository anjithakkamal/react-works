import React, { useContext } from 'react'
import ChildC from './ChildC'
import MessageContext from './MyContext'

function ChildB() {

    const message=useContext(MessageContext)
  return (
    <div>
      <h1>child B {message}</h1>
      <ChildC></ChildC>
    </div>
  )
}

export default ChildB
