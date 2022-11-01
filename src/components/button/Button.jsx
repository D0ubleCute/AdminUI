import React from 'react';

import './button.css'

const Button = () => {
    return (
        <div className="customer__list-action">
            <button className='customer__list-add' type='button'>Add</button>
            <button className='customer__list-edit' type='button'>Edit</button>
        </div>
    );
};

export default Button;