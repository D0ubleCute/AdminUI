import React from 'react';

import ProductCard from '../components/product_card/ProductCard'

import productItem from '../assets/jsonData/product.json'

const Product = () => {
    return (
        <div className="page-header">
            <h2>Products in Storage</h2>
            <div className="row">
                <div>
                {
                        productItem.map((item, index) => (
                            <div className="col-3" key={item.id}>
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
        </div>
    );
};

export default Product;