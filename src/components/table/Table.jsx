import React, { useState } from 'react';
import CustomerProfileButton from '../button/CustomerProfileButton';
import Loading from '../loading/Loading';
import CustomerProfile from '../profile/CustomerProfile';

import './table.css';
let pages = 1;

let range = [];
const Table = (props) => {
	const [dataShow, setDataShow] = useState(
		props.limit && props.bodyData ? props?.bodyData.slice(0, Number(props.limit)) : props?.bodyData
	);
	const [currPage, setCurrPage] = useState(0);
	const [profileShow, setProfileShow] = useState(false);
	const [customer, setCustomer] = useState(null);
	if (props.limit !== undefined) {
		let page = Math.floor(props.bodyData.length / Number(props.limit));
		pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
		range = [...Array(pages).keys()];
	}

	const selectPage = (page) => {
		const start = Number(props.limit) * page;
		const end = start + Number(props.limit);
		console.log(start, end);
		setDataShow(props.bodyData.slice(start, end));

		setCurrPage(page);
	};

	const handleFetchCustomer = (id) => {
		setCustomer(props.bodyData.find((item) => item.id === id));
		setProfileShow(true);
	};
	return (
		<div>
			<div className="table-wrapper">
				<table>
					{props.headData && props.renderHead ? (
						<thead>
							<tr>{props.headData.map((item, index) => props.renderHead(item, index))}</tr>
						</thead>
					) : null}
					<tbody>
						{props.isLoading ? (
							<tr className="">
								<td colSpan="6" className="text-center">
									<Loading></Loading>
								</td>
							</tr>
						) : props.bodyData && props.bodyData.length > 0 ? (
							dataShow.map((item) => {
								return (
									<tr key={item?.id}>
										<td>{item?.id}</td>
										<td>{item?.account.fullName}</td>
										<td>{item?.account.email}</td>
										<td>{item?.account.phone}</td>
										<td>{item?.account.address}</td>
										<td>
											<CustomerProfileButton
												onClick={() => {
													handleFetchCustomer(item?.id);
												}}
											/>
										</td>
									</tr>
								);
							})
						) : null}
					</tbody>
				</table>
			</div>
			{pages > 1 ? (
				<div className="table__pagination">
					{range.map((item, index) => (
						<div
							key={index}
							className={`table__pagination-item ${currPage === index ? 'active' : ''}`}
							onClick={() => selectPage(index)}
						>
							{item + 1}
						</div>
					))}
				</div>
			) : null}
			<CustomerProfile customer={customer} show={profileShow} setShow={setProfileShow} />
		</div>
	);
};

export default Table;
