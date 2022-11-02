import React, { useEffect } from 'react';

import Table from '../components/table/Table';

import CustomerDialog from '../components/dialog/CustomerDialog';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Header from '../components/header/Header';
import { CUSTOMERS_GET, token } from '../utils/constant';
import Loading from '../components/loading/Loading';
import CustomerProfileButton from '../components/button/CustomerProfileButton';

const customerTableHead = ['', 'name', 'email', 'phone', 'location', 'action'];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const Customers = () => {
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [customers, setCustomers] = useState([]);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const response = await fetch(CUSTOMERS_GET, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: 'GET',
			});
			const data = await response.json();
			if (data?.status === 200) {
				setCustomers(data?.data.content);
			} else {
				console.error(data);
			}
			setIsLoading(false);
		})();
	}, []);
	if (customers.length > 0) {
		return (
			<div>
				<div className="flex items-center justify-between mb-2 header">
					<Header title="customers"></Header>
					<Button
						onClick={handleShow}
						className="flex items-center gap-2 text-black btn btn-success"
						data-toggle="modal"
					>
						<i className="bx bxs-add-to-queue"></i>
						<span>Add Customer</span>
					</Button>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card__body">
								<Table
									limit="10"
									headData={customerTableHead}
									renderHead={(item, index) => renderHead(item, index)}
									bodyData={customers}
									isLoading={isLoading}
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
						<CustomerDialog />
					</Modal.Body>
					<Modal.Footer>
						<Button className="btn btn-danger btn-lg btn-block" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
	return (
		<div className="flex justify-center">
			<Loading></Loading>
		</div>
	);
};

export default Customers;
