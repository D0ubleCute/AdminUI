import React from "react";

import { useState } from "react";

import ProductCard from "../components/product_card/ProductCard";

import productItem from "../assets/jsonData/product.json";

import ProductDialog from "../components/dialog/ProductDialog";
import { Button, Modal } from "react-bootstrap";

const Product = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className="page-header">
            <div className="header">
                <h2>Products in Storage</h2>
                <Button
                    onClick={handleShow}
                    className="btn btn-success"
                    data-toggle="modal"
                >
                    <i class="bx bxs-add-to-queue"></i>
                    <span> Add Product</span>
                </Button>
            </div>
            <div className="row">
                {productItem.map((item, index) => (
                    <div key={item.id}>
                        <ProductCard
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProductDialog />
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
