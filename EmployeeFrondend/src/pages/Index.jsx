import React,{ useState } from 'react'
import EmployeeCreate from '../components/EmployeeCreate'
import EmployeeSummary from '../components/EmployeeSummary'
import NavBar from '../components/NavBar'

function Index() {
  const [refreshRequired,setRefreshrequired]=useState('')

  return (
    <div>
      <NavBar></NavBar>
      <EmployeeCreate setRefreshrequired={setRefreshrequired}></EmployeeCreate>
      <EmployeeSummary refreshRequired={refreshRequired}></EmployeeSummary>
    </div>
  )
}

export default Index
