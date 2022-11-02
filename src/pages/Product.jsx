import React from 'react';

import ProductCard from '../components/product_card/ProductCard'

import productItem from '../assets/jsonData/product.json'

const Product = () => {
    return (
        <div className="page-header">
            <div className="header">
                <h2>Products in Storage</h2>
                <button>Add product</button>
            </div>
            <div className="row">
                {
                    productItem.map((item, index) => (
                        <div key={item.id}>
                            <ProductCard
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;