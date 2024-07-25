import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import { addCustomerApi } from '../services/Api';

function CustomerCreate() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [customer, setCustomer] = useState({ name: "", phone: "", email: "", vehicle_no: "", running_km: "" })

    async function handleFormSubmit(){

        let res=await addCustomerApi(customer)

        console.log(res);

        setShow(false)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Customer
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="">Enter Customer Name</label>
                            <input type="text"
                                className='form-control'
                                onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Enter Customer Phone</label>
                            <input type="text"
                                className='form-control'
                                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Enter Customer Email</label>
                            <input type="email"
                                className='form-control'
                                onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Enter Customer Vehicle Number</label>
                            <input type="text"
                                className='form-control'
                                onChange={(e) => setCustomer({ ...customer, vehicle_no: e.target.value })} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Enter vehicle Running Km</label>
                            <input type="text"
                                className='form-control'
                                onChange={(e) => setCustomer({ ...customer, running_km: e.target.value })} />

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleFormSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomerCreate
