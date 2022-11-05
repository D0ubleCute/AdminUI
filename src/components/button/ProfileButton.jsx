import { Link } from 'react-router-dom';
import './button.css';

const ProfileButton = (props) => {
	if (props.to) {
		return (
			<div className="flex items-center gap-2 customer__list-action">
				<Link to={props.to} className="customer__list-info">
					<i className="bx bx-male"></i>
				</Link>
			</div>
		);
	}
	return (
		<div className="flex items-center gap-2 customer__list-action">
			<button className="customer__list-info" type="button" onClick={props?.onClick}>
				<i className="bx bx-male"></i>
			</button>
		</div>
	);
};

export default ProfileButton;
