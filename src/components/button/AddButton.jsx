import React from 'react';

import './button.css'

const AddButton = () => {
    return (
        <div className="customer__list-action">
            <button className='customer__list-add' type='button'>
                <i class='bx bxs-add-to-queue'> Add Customer</i>
            </button>
        </div>
    );
};

export default AddButton;