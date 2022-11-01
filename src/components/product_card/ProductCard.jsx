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
            <br></br>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;