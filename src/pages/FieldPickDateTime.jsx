import { Scheduler } from '@aldabil/react-scheduler';
import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackLink from '../components/backLinks/BackLink';
import FieldOrderDialog from '../components/dialog/FieldOrderDialog';
import { useAuth } from '../components/store/useAuth';
import { FIELDS_BOOKED_WEEK } from '../utils/constant';

const FieldPickDateTime = () => {
	const { id } = useParams();
	const [fieldBooked, setFieldBooked] = React.useState([]);
	const [refresh, setRefresh] = React.useState(false);
	const user = useAuth((state) => state.user);
	useEffect(() => {
		if (id) {
			fetch(FIELDS_BOOKED_WEEK, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify({
					field_id: id,
				}),
			})
				.then((res) => {
					if (res.status === 200) {
						return res.json();
					} else {
						throw new Error('Something went wrong');
					}
				})
				.then((data) => {
					if (data.status === 200) {
						console.log(data);
						const mappedData = data.data.map((item) => {
							return {
								event_id: item.id,
								title: `Booked`,
								start: new Date(item.start),
								end: new Date(item.end),
								editable: false,
								deletable: false,
								color: '#900000',
							};
						});
						setFieldBooked(mappedData);
					}
				});
		}
	}, [id, refresh, user.token]);
	if (!id) return;
	return (
		<>
			<BackLink to="/fields" name="fields"></BackLink>
			<Scheduler
				view="week"
				day={null}
				month={null}
				events={fieldBooked}
				week={{
					weekDays: [0, 1, 2, 3, 4, 5, 6],
					weekStartOn: 1,
					startHour: 5,
					endHour: 22,
					step: 60,
				}}
				customEditor={(scheduler) => (
					<FieldOrderDialog setRefresh={setRefresh} scheduler={scheduler} />
				)}
			/>
		</>
	);
};

export default FieldPickDateTime;
