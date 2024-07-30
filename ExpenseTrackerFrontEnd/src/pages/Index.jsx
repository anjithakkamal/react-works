import React from 'react'
import ExpenseCreate from '../components/ExpenseCreate'
import ExpenseList from '../components/ExpenseList'

function Index() {
  return (
    <div>
      <ExpenseCreate></ExpenseCreate>
      <ExpenseList></ExpenseList>
    </div>
  )
}

export default Index
