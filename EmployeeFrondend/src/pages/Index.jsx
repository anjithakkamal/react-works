import React,{ useState } from 'react'
import EmployeeCreate from '../components/EmployeeCreate'
import EmployeeSummary from '../components/EmployeeSummary'
import NavBar from '../components/NavBar'

function Index() {
  const [refreshRequired,setRefreshrequired]=useState()

  const [employeeId, setEmployeeId] = useState()

  return (
    <div>
      <NavBar></NavBar>
      <EmployeeCreate setRefreshrequired={setRefreshrequired} employeeId={employeeId}></EmployeeCreate>
      <EmployeeSummary refreshRequired={refreshRequired} setEmployeeId={setEmployeeId}></EmployeeSummary>
    </div>
  )
}

export default Index
