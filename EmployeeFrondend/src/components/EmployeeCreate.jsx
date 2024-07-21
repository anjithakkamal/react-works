import React,{useState} from 'react'
import { employeeCreateApi } from '../services/api';

function EmployeeCreate({setRefreshrequired}) {

  const [employee, setEmployee] = useState({ name: '', department: '', salary: '', place: '', email: '', profile: '' })

  async function handleSubmit(event){

    event.preventDefault()

    // console.log(movie);

    let res=await employeeCreateApi(employee)

    console.log(res);

    setRefreshrequired("reload")

  }
  return (
    <div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border border-3 rounded shadow p-4">
            <h3 className='text-center my-2'>Add New  Employee </h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className='form-control'
                    onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Department</label>
                  <input
                    type="text"
                    className='form-control'
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
                    onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Place</label>
                  <input
                    type="text"
                    className='form-control'
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
                <button type='submit'>Add</button>
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
