import React, { useEffect, useState } from 'react'

import { deleteWorkApi, retrieveCustomerApi } from '../services/Api'

import Button from 'react-bootstrap/Button';

function WorkList({ custId, refreshRequired, setWorkId }) {

    const [works, setWorks] = useState()

    const [workTotal, setWorkTotal] = useState()

    async function handleDelete(workId) {

        let res =await deleteWorkApi(workId)

        if (res.status > 199 && res.status < 300) {

            fetchCustomerData(custId)
        }

    }

    async function fetchCustomerData(custId) {

        let res = await retrieveCustomerApi(custId)

        if (res.status > 199 && res.status < 300) {

            // console.log(res.data.works);

            // console.log(res.data.work_total);

            setWorks(res.data.works)

            setWorkTotal(res.data.work_total)
        }

    }
    useEffect(() => {

        fetchCustomerData(custId)
    }, [refreshRequired])
    return (
        <div className='border border-2  border-dark rounded p-3 my-3 shadow'>
            <table className='table'>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {works && works.map((w, i) => <tr>
                        <td>{w.title}</td>
                        <td>{w.description}</td>
                        <td>{w.amount}</td>
                        <td className='d-flex gap-2'>
                            <Button className='btn btn-danger' onClick={()=>handleDelete(w.id)}>
                                <i class="fa-solid fa-trash"></i>
                            </Button>

                            <Button className='btn btn-warning' onClick={() => setWorkId(w.id)} >
                                <i class=" fa-solid fa-pen-to-square"></i>
                            </Button>



                        </td>
                    </tr>)}

                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total: {workTotal}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WorkList
