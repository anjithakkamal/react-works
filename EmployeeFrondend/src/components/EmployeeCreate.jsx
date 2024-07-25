import React, { useEffect, useState } from 'react'
import { employeeCreateApi, employeeDetailApi, employeeUpdateApi } from '../services/api';

function EmployeeCreate({ setRefreshrequired, employeeId }) {

  const [employee, setEmployee] = useState({ name: '', department: '', salary: '', place: '', email: '', profile: '' })

  useEffect(() => {

    getEmployeeDetails(employeeId)

  }, [employeeId])

  async function getEmployeeDetails(employeeId) {

    let res = await employeeDetailApi(employeeId)

    if (res.status > 199 && res.status < 300) {

      setEmployee(res.data)

    }
  }

  async function handleSubmit(event) {

    event.preventDefault()

    if (employeeId) {

      let res = await employeeUpdateApi(employeeId, employee)

      console.log(res);

      console.log("update");

      reSet()

      setRefreshrequired(Math.random())

    }

    else {

      let res = await employeeCreateApi(employee)

      console.log(res);

      console.log("create");

      reSet()

      setRefreshrequired(Math.random())

    }
    function reSet(){

      setEmployee({ name: '', department: '', salary: '', place: '', email: '', profile:null })
    }

  }
  return (
    <div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border border-3 rounded shadow p-4">
            {employeeId?<h3>Edit Employee</h3>:<h3 className='text-center my-2'>Add New  Employee </h3>}
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className='form-control'
                    value={employee.name}
                    onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Department</label>
                  <input
                    type="text"
                    className='form-control'
                    value={employee.department}
                    onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Salary</label>
                  <input
                    type="text"
                    className='form-control'
                    value={employee.salary}
                    onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Place</label>
                  <input
                    type="text"
                    className='form-control'
                    value={employee.place}
                    onChange={(e) => setEmployee({ ...employee, place: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-3  d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className='form-control'
                    value={employee.email}
                    onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Profile</label>
                  <input
                    type="file"
                    accept='image/*'
                    className='form-control'
                    onChange={(e) => setEmployee({ ...employee, profile: e.target.files[0] })}
                  />
                </div>
              </div>
              <div className="mb-3">
                {employeeId?<button className='form-control btn btn-primary' type='submit'>Edit</button>:<button className='form-control btn btn-dark' type='submit'>Add</button>}
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>


    </div>

  )
}

export default EmployeeCreate
