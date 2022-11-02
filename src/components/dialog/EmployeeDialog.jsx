import React from "react";
import { Form, FormGroup, Button } from "react-bootstrap";

const EmployeeDialog = () => {
    return (
        <Form>
            <FormGroup className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter phone"
                    required
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter location"
                    required
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    placeholder="Enter employee avatar"
                    required
                />
            </FormGroup>
            <Button
                className="btn btn-success btn-lg btn-block"
                type="submit"
                block
            >
                Add new Employee
            </Button>
        </Form>
    );
};

export default EmployeeDialog;
