import './product_card.css';

import React from 'react';

const ProductCard = (props) => {
	return (
		<div className="product__item">
			<div className="product__item-image">
				<img src={props.image} alt="product_image"></img>
			</div>
			<div className="product__item-info">
				<h3>{props.name}</h3>

				<div>
					<p style={{ marginBottom: 0 }}>
						Import price:{' '}
						<strong>
							{props.price.toLocaleString('vi-VI', {
								style: 'currency',
								currency: 'VND',
							})}
						</strong>
					</p>
					<span>
						Quantity: <strong>{props.quantity}</strong>
					</span>
				</div>
			</div>

			<button className="product__item__btn">View details</button>
		</div>
	);
};

export default ProductCard;
