import React, { useEffect, useState } from 'react'
import { employeeDeleteApi, employeeListApi } from '../services/api'

function EmployeeSummary({refreshRequired,setEmployeeId}) {

    const [employee, setEmployee] = useState()

    async function handleEmployeeDelete(id){

        let res=await employeeDeleteApi(id)

        if(res.status>199 && res.status<300){

            fetchEmployee()

        }

        // console.log(id);
    }

    async function fetchEmployee() {

        let res = await employeeListApi()

        if (res.status > 199 && res.status < 300) {

            setEmployee(res.data)
        }
        else {
            console.log("failed to fetch data from resource");
        }
        console.log(res);
    }

    useEffect(() => {

        fetchEmployee()
    }, [refreshRequired])
    // name,department,place,salary,profile
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <table className='table'>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Place</th>
                                <th>Email</th>
                                <th>Profile</th>
                                <th>Acction</th>
                            </tr>
                            <tbody>
                                {employee && employee.map((e, i) => (
                                    <tr>
                                        <td>{e.name}</td>
                                        <td>{e.department}</td>
                                        <td>{e.salary}</td>
                                        <td>{e.place}</td>
                                        <td>{e.email}</td>
                                        <td><img style={{ width: "70%", height: "200px" }} src={e.profile} alt="" /></td>
                                        <td>
                                            <button
                                             className='btn btn-outline-danger'
                                             onClick={()=>handleEmployeeDelete(e.id)}
                                             >Delete</button>

                                             <button
                                             className='btn btn-outline-primary'
                                             onClick={()=>setEmployeeId(e.id)}
                                             >Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeSummary
