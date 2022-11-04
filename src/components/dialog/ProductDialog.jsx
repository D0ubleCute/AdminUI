import React from "react";
import { Form, FormGroup, Button } from "react-bootstrap";

const CustomerDialog = () => {
    return (
        <Form>
            <FormGroup className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter price"
                    required
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    required
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Import Product Picture</Form.Label>
                <Form.Control type="file" accept="image/*" required />
            </FormGroup>
            <Button
                className="btn btn-success btn-lg btn-block"
                type="submit"
                block
            >
                Add new product
            </Button>
        </Form>
    );
};

export default CustomerDialog;
