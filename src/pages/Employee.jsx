import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import { Button, Modal } from 'react-bootstrap';
import Table from '../components/table/Table';
import { EMPLOYEES_GET, token } from '../utils/constant';
import Loading from '../components/loading/Loading';
import EmployeeDialog from '../components/dialog/EmployeeDialog';
import DeleteConfirm from '../components/modal/DeleteConfirm';
const employeeTableHead = ['', 'name', 'email', 'phone', 'location', 'action'];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const Employee = () => {
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [employees, setEmployees] = useState([]);
	const [showModalDeleteEmployee, setShowModalDeleteEmployee] = useState(false);
	const [employeeDeleteId, setEmployeeDeleteId] = useState(null);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const handleRemove = (id) => {
		setEmployeeDeleteId(id);
		setShowModalDeleteEmployee(true);
	};

	const handleDelete = async () => {
		if (!employeeDeleteId) return;
		setIsLoading(true);
		const response = await fetch(`${EMPLOYEES_GET}/${employeeDeleteId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			method: 'DELETE',
		});
		if (response?.status === 204) {
			handleFetchData();
		}
		setIsLoading(false);
		setShowModalDeleteEmployee(false);
	};
	const handleFetchData = async () => {
		setIsLoading(true);
		const response = await fetch(EMPLOYEES_GET, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			method: 'GET',
		});
		const data = await response.json();
		console.log(data);
		setIsLoading(false);
		if (data?._embedded?.employees && data?._embedded?.employees.length > 0) {
			setEmployees([...data?._embedded?.employees]);
		} else {
			console.error(data);
		}
	};
	useEffect(() => {
		handleFetchData();
	}, []);
	if (!isLoading) {
		return (
			<div>
				<div className="flex items-center justify-between mb-2 header">
					<Header title="Employees"></Header>
					<Button
						onClick={handleShow}
						className="flex items-center gap-2 text-black btn btn-success"
						data-toggle="modal"
					>
						<i className="bx bxs-add-to-queue"></i>
						<span>Add Employee</span>
					</Button>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card__body">
								<Table
									limit="10"
									headData={employeeTableHead}
									renderHead={(item, index) => renderHead(item, index)}
									bodyData={employees}
									isLoading={isLoading}
									handleRemove={handleRemove}
								/>
							</div>
						</div>
					</div>
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header>
						<Modal.Title>Add Employee</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<EmployeeDialog setShow={setShow} handleFetchData={handleFetchData}></EmployeeDialog>
					</Modal.Body>
					<Modal.Footer>
						<Button className="btn btn-danger btn-lg btn-block" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				{employeeDeleteId && (
					<DeleteConfirm
						show={showModalDeleteEmployee}
						handleClose={() => setShowModalDeleteEmployee(false)}
						handleDelete={handleDelete}
					/>
				)}
			</div>
		);
	}
	return (
		<div className="flex justify-center">
			<Loading></Loading>
		</div>
	);
};

export default Employee;
