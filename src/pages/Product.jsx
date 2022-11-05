import React, { useEffect } from 'react';

import { useState } from 'react';

import ProductCard from '../components/product_card/ProductCard';

import ProductDialog from '../components/dialog/ProductDialog';
import { Button, Modal } from 'react-bootstrap';
import Header from '../components/header/Header';
import { ITEMS_GET, token } from '../utils/constant';
import ProductDetail from '../components/product_card/ProductDetail';

const Product = () => {
	const [show, setShow] = useState(false);
	const [products, setProducts] = useState([]);
	const [showDetail, setShowDetail] = useState(false);
	const [itemDetail, setItemDetail] = useState(false);
	const [refresh, setRefresh] = useState(false);
	useEffect(() => {
		(async () => {
			const response = await fetch(ITEMS_GET, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();
			if (data._embedded) {
				setProducts(data._embedded.items);
			}
		})();
	}, [refresh]);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	return (
		<div className="page-header">
			<div className="header">
				<Header title="Products in Storage"></Header>
				<Button
					onClick={handleShow}
					className="flex items-center gap-2 btn btn-success"
					data-toggle="modal"
				>
					<i className="bx bxs-add-to-queue"></i>
					<span>Add Product</span>
				</Button>
			</div>
			<div className="row">
				{products?.length > 0 &&
					products.map((item) => (
						<div key={item.resourceId}>
							<ProductCard
								id={item.resourceId}
								image={item.image}
								name={item.name}
								price={item.importPrice}
								quantity={item.quantity}
								status={item.status}
								handleViewDetail={() => {
									setShowDetail(true);
									setItemDetail(item);
								}}
								setRefresh={setRefresh}
							/>
						</div>
					))}
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Add Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ProductDialog onHide={handleClose} />
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-danger btn-lg btn-block" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{itemDetail && (
				<ProductDetail
					item={itemDetail}
					show={showDetail}
					handleClose={() => {
						setShowDetail(false);
					}}
				/>
			)}
		</div>
	);
};

export default Product;
