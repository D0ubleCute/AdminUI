import './button.css';

const UpdateButton = (props) => {
	return (
		<div className="flex items-center gap-2 customer__list-action">
			<button className="customer__list-info" type="button" onClick={props?.onClick}>
				<i className="bx bx-refresh"></i>
			</button>
		</div>
	);
};

export default UpdateButton;
