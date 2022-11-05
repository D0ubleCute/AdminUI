import './product_card.css';

import React, { useState } from 'react';
import { formatMoney } from '../../utils/helper';
import DeleteConfirm from '../modal/DeleteConfirm';
import { ITEMS_GET, token } from '../../utils/constant';
import { Badge } from 'react-bootstrap';

const ProductCard = (props) => {
	const [showModalDeleteConfirm, setShowModalDeleteConfirm] = useState(false);
	const handleDelete = async () => {
		if (!props.id) return;
		const response = await fetch(`${ITEMS_GET}/${props.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}}`,
			},
			body: JSON.stringify({
				status: 'SOLD_OUT',
				importPrice: 0,
				unit: null,
				quantity: 0,
				supplier: null,
				itemCategory: null,
			}),
		});
		console.log(response);
		if (response.status === 200) {
			props.setRefresh(true);
			setShowModalDeleteConfirm(false);
		}
	};
	return (
		<div className="product__item">
			<Badge
				pill
				bg={`${
					(props.status === 'SOLD_OUT' && `secondary`) ||
					(props.status === 'AVAILABLE' && `success`) ||
					(props.status === 'HOT' && `danger`)
				}`}
				className="product-status"
			>
				{props?.status?.split('_').join(' ')}
			</Badge>
			<div className="product__item-image">
				<img src={props.image} alt="product_image"></img>
			</div>
			<div className="product__item-info">
				<h3>{props.name}</h3>

				<div>
					<p style={{ marginBottom: 0 }}>
						Import price: <strong>{formatMoney(props.price)}</strong>
					</p>
					<span>
						Quantity: <strong>{props.quantity}</strong>
					</span>
				</div>
			</div>

			<button className="product__item__btn" onClick={props.handleViewDetail}>
				View details
			</button>
			<div className="flex items-center gap-3 mt-3">
				<button
					className="w-1/2 btn btn-warning"
					onClick={() => {
						alert('This function will develop soon');
					}}
				>
					Edit
				</button>
				<button
					className="w-1/2 btn btn-danger"
					onClick={() => {
						setShowModalDeleteConfirm(true);
					}}
				>
					Delete
				</button>
			</div>
			<DeleteConfirm
				show={showModalDeleteConfirm}
				handleClose={() => {
					setShowModalDeleteConfirm(false);
				}}
				handleDelete={handleDelete}
			></DeleteConfirm>
		</div>
	);
};

export default ProductCard;
