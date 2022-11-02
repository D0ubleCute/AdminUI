import "./product_card.css"

import React from 'react';

import product_image from '../../assets/images/coca1.jpg'

const ProductCard = props => {
    return (
        <div className="product__item">
            <div className="product__item-image">
                <img src={product_image} alt="product_image"></img>
            </div>
            <div className="product__item-info">
                <h3>{props.name}</h3>
                <div>
                    <p style={{marginBottom: 0}}>{props.price}</p>
                    <span>Supplier</span>
                </div>                
            </div>

            <button className="product__item__btn">View details</button>
        </div>
    );
};

export default ProductCard;