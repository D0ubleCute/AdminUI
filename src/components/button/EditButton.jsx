import React from 'react';

import './button.css'

const EditButton = () => {
    return (
        <div className="customer__list-action">
            <button className='customer__list-edit' type='button'>
                <i class='bx bxs-edit-alt'></i>
            </button>
        </div>
    );
};

export default EditButton;