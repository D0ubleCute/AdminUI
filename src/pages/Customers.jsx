import React from "react";

import Table from "../components/table/Table";

import customerList from "../assets/jsonData/customers-list.json";

import EditButton from "../components/button/EditButton";

import Dialog from "../components/dialog/Dialog";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const customerTableHead = ["", "name", "email", "phone", "location", "action"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>
            <EditButton />
        </td>
    </tr>
);

const Customers = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <div className="row">
                <h2 className="page-header">Customers</h2>
                <div className="col-sm-6">
                    <Button
                        onClick={handleShow}
                        className="btn btn-success"
                        data-toggle="modal"
                    >
                        <i class="bx bxs-add-to-queue"></i>
                        <span> Add Customer</span>
                    </Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item, index) =>
                                    renderHead(item, index)
                                }
                                bodyData={customerList}
                                renderBody={(item, index) =>
                                    renderBody(item, index)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Dialog />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="btn btn-danger btn-lg btn-block"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Customers;
