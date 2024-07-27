import React from 'react'
import CustomerCreate from '../components/CustomerCreate'
import CustomerList from '../components/CustomerList'
import Header from '../components/Header'

function Index() {
    return (
        <div>

            <div className='container d-flex justify-content-end my-2'>
                <CustomerCreate cls={"fa-solid fa-plus"} custId={null}></CustomerCreate>
            </div>

            <div className="container">
                <CustomerList></CustomerList>
            </div>
        </div>
    )
}

export default Index
