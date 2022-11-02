import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AVATAR_API } from '../../utils/constant';
import Loading from '../loading/Loading';
const CustomerProfile = ({ show, setShow, customer }) => {
	return (
		<Modal show={show} onHide={() => setShow(false)} animation={true}>
			<Modal.Header style={{ display: 'unset' }}>
				<Modal.Title>Customer Profile</Modal.Title>
				{!customer ? (
					<div className="flex justify-center">
						<Loading></Loading>
					</div>
				) : (
					<Modal.Body style={{ paddingLeft: 'unset' }}>
						<div className="flex">
							<div className="flex-shrink-0 max-w-[150px] max-h-[150px] rounded-xl overflow-hidden">
								<img
									src={AVATAR_API(customer?.account.fullName)}
									className="object-cover w-full h-full"
									alt=""
								/>
							</div>
							<div className="flex-grow ml-4 ">
								<h2 className="text-2xl font-bold">{customer?.account.fullName}</h2>
								<p className="flex items-center text-base text-gray-500">
									<span className="text-gray-900">
										<i className="bx bx-child"></i>
									</span>
									<span className="ml-2">{customer?.account.sex}</span>
								</p>
								<p className="flex items-center text-base text-gray-500">
									<span className="text-gray-900">
										<i className="bx bxs-calendar"></i>
									</span>
									<span className="ml-2">{customer?.account.dob}</span>
								</p>
								<p className="flex items-center text-base text-gray-500">
									<span className="text-gray-900">
										<i className="bx bx-phone-call"></i>
									</span>
									<span className="ml-2">{customer?.account.phone}</span>
								</p>
								<p className="flex items-center text-base text-gray-500">
									<span className="text-gray-900">
										<i className="bx bx-envelope"></i>
									</span>
									<span className="ml-2">
										<Link to={`mailto:${customer?.account.email}`} target="_blank">
											{customer?.account.email}
										</Link>
									</span>
								</p>
								<p className="flex items-center text-base text-gray-500">
									<span className="text-gray-900">
										<i className="bx bx-map"></i>
									</span>
									<span className="ml-2">{customer?.account.address}</span>
								</p>
								<p className="flex items-center text-base text-gray-500">
									<span className="text-gray-900">
										<i className="bx bx-wallet"></i>
									</span>
									<span className="ml-2">{customer?.rewardPoint}</span>
								</p>
							</div>
						</div>
					</Modal.Body>
				)}
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal.Header>
		</Modal>
	);
};

export default CustomerProfile;
