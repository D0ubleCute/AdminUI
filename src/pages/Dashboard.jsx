import React, { useEffect, useMemo, useState } from 'react';

import StatusCard from '../components/status_card/StatusCard';

import statusCardItem from '../assets/jsonData/status-card.json';
import Header from '../components/header/Header';
import CustomLine from '../components/chart/CustomLine';
import { useAuth } from '../components/store/useAuth';
import Loading from '../components/loading/Loading';

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const revenueLink = useMemo(() => {
		return statusCardItem.find((item) => item.id === activeTab).revenueByMonth;
	}, [activeTab]);
	const [data, setData] = useState(null);
	const user = useAuth((state) => state.user);
	console.log(user);
	useEffect(() => {
		(async () => {
			const currentYear = new Date().getFullYear();
			const currentMonth = new Date().getMonth() + 1;
			if (revenueLink) {
				setIsLoading(true);
				const response = await fetch(`${revenueLink}/${currentMonth}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
				});
				const data = await response.json();
				if (data.status) {
					setData(data);
					console.log(data);
				}
				setIsLoading(false);
			}
		})();
	}, [revenueLink, user.token]);

	return (
		<div>
			<Header title="Dashboard" className="mb-3"></Header>
			{isLoading ? (
				<div className="flex justify-center">
					<Loading></Loading>
				</div>
			) : (
				<>
					<div className="grid grid-cols-4 gap-3">
						{statusCardItem.map((item) => (
							<StatusCard
								key={item.title}
								{...item}
								isActive={item.id === activeTab}
								onClick={() => {
									setActiveTab(item.id);
								}}
							/>
						))}
					</div>
					<div className="pb-5 mt-2">
						<CustomLine values={data}></CustomLine>
					</div>
				</>
			)}
		</div>
	);
};

export default Dashboard;
