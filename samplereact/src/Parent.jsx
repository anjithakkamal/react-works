import React, { createContext, useState } from 'react'
import ChildA from './ChildA'
import MessageContext from './MyContext'


function Parent() {

    const [message,SetMessage]=useState("this is a greeting from parent")
    
  return (
    <div>
      <MessageContext.Provider value={message}>
      <ChildA></ChildA>
      </MessageContext.Provider>
    </div>
  )
}

export default Parent
