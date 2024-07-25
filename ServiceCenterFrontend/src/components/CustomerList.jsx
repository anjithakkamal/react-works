import React, { useEffect, useState } from 'react'
import { ListCustomerApi } from '../services/Api'

function CustomerList() {

    const [customers, setCustomers] = useState()

    async function fetchAllCustomers() {

        let res = await ListCustomerApi()

        if (res.status > 199 && res.status < 300) {

            setCustomers(res.data)

            // console.log(customers);
        }
    }

    useEffect(() => {
        fetchAllCustomers()
    }, [])
    return (
        <div>
            {customers && customers.map((c, i) => <div>{c.name} {c.email} {c.phone}</div>)}
        </div>
    )
}

export default CustomerList
