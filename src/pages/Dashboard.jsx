import React from 'react';

import StatusCard from '../components/status_card/StatusCard';

import statusCardItem from '../assets/jsonData/status-card.json';
import Header from '../components/header/Header';

const Dashboard = () => {
	return (
		<div>
			<Header title="Dashboard" className="mb-2"></Header>
			<div className="row">
				<div className="col-6">
					<div className="row">
						{statusCardItem.map((item, index) => (
							<div className="col-6" key={index}>
								<StatusCard icon={item.icon} count={item.count} title={item.title} />
							</div>
						))}
					</div>
				</div>
				<div className="col-6">
					<div className="card full-height"></div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
