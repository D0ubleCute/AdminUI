import './button.css';

const ProfileButton = (props) => {
	return (
		<div className="flex items-center gap-2 customer__list-action">
			<button className="customer__list-info" type="button" onClick={props?.onClick}>
				<i className="bx bx-male"></i>
			</button>
		</div>
	);
};

export default ProfileButton;
