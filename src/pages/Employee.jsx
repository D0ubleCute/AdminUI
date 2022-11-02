import React from "react";

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "../components/table/Table";
import EditButton from "../components/button/EditButton";
import EmployeeDialog from "../components/dialog/EmployeeDialog";

import employeeList from "../assets/jsonData/employees-list.json";
import employee_image from "../assets/images/user1.jpg";

import "./index.css";

const employeeTableHead = [
    "",
    "avatar",
    "name",
    "email",
    "phone",
    "location",
    "action",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>
            <img src={employee_image} alt="" />
        </td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>
            <EditButton />
        </td>
    </tr>
);

const Product = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <h2 className="page-header">Staff List</h2>
            <div className="col-sm-6">
                <Button
                    onClick={handleShow}
                    className="btn btn-success"
                    data-toggle="modal"
                >
                    <i class="bx bxs-add-to-queue"></i>
                    <span> Add Employee</span>
                </Button>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={employeeTableHead}
                                renderHead={(item, index) =>
                                    renderHead(item, index)
                                }
                                bodyData={employeeList}
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
                    <EmployeeDialog />
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

export default Product;
