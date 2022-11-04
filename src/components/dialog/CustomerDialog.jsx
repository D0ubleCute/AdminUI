import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

const CustomerDialog = () => {
	return (
		<Form>
			<FormGroup className="mb-3">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter name" required={true} />
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" required={true} />
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Sex</Form.Label>
				<div className="mb-3">
					<Form.Check inline defaultChecked={true} label="Male" name="sex" type="radio" />
					<Form.Check inline label="Female" name="sex" type="radio" />
					<Form.Check inline label="Other" name="sex" type="radio" />
				</div>
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Phone number</Form.Label>
				<Form.Control type="number" placeholder="Enter phone" required={true} />
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Address</Form.Label>
				<Form.Control type="text" placeholder="Enter address" required={true} />
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="Enter username" required={true} />
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control type="text" placeholder="Enter password" required={true} />
			</FormGroup>
			<Button className="btn btn-success btn-lg btn-block" type="submit">
				Add new customer
			</Button>
		</Form>
	);
};

export default CustomerDialog;
