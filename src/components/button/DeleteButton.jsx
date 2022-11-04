import React from 'react';

const DeleteButton = ({ onClick }) => {
	return (
		<div className="flex items-center gap-2 customer__list-action">
			<button className="customer__list-info" type="button" onClick={onClick}>
				<i className="bx bx-x-circle"></i>
			</button>
		</div>
	);
};

export default DeleteButton;
