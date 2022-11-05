import React, { useEffect } from 'react';
import { Form, FormGroup, Button, Alert } from 'react-bootstrap';
import { SUPPLIER, token } from '../../utils/constant';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from '../loading/Loading';

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	phone: yup.string().required('Phone is required'),
	address: yup.string().required('Address is required'),
});

const SupplierDialog = ({ setShow, handleFetchData, id }) => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		reset,
		setError,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: 'ka@gmail.com',
			phone: '0326042022',
			address: '360 pham van dong',
			note: '',
		},
		resolver: yupResolver(schema),
	});
	useEffect(() => {
		if (id) {
			fetch(`${SUPPLIER}/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data?.name) {
						reset({
							name: data.name,
							phone: data.phone,
							address: data.address,
							note: data.note,
						});
					}
				});
		}
	}, [id]);

	const onSubmit = (data) => {
		console.log(data);
		if (isValid && !isSubmitting) {
			fetch(id ? `${SUPPLIER}/${id}` : SUPPLIER, {
				method: id ? `PUT` : 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data?.name) {
						handleFetchData();
						reset({
							name: '',
							phone: '',
							address: '',
							description: '',
						});
						setShow(false);
					} else {
						setError('error', { message: data.message || 'Error in create supplier' });
					}
				});
		}
	};
	if (isSubmitting) {
		return (
			<div className="flex items-center justify-center">
				<Loading></Loading>
			</div>
		);
	}
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup className="mb-3">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter name" name="fullName" {...register('name')} />
			</FormGroup>

			<FormGroup className="mb-3">
				<Form.Label>Phone number</Form.Label>
				<Form.Control
					type="number"
					name="phone"
					{...register('phone')}
					placeholder="Enter phone number"
				/>
			</FormGroup>
			<FormGroup className="mb-3">
				<Form.Label>Address</Form.Label>
				<Form.Control
					type="text"
					name="address"
					{...register('address')}
					placeholder="Enter address"
				/>
			</FormGroup>

			<FormGroup className="mb-3">
				<Form.Label>Note</Form.Label>
				<Form.Control
					as="textarea"
					name="note"
					{...register('note')}
					rows={3}
					placeholder="Enter note"
				/>
			</FormGroup>

			<FormGroup className="mb-3">
				{errors && Object.keys(errors).length > 0 && (
					<Alert variant="danger">
						<p style={{ marginBottom: 'unset' }}>{errors[Object.keys(errors)[0]]?.message}</p>
					</Alert>
				)}
			</FormGroup>

			<Button className="btn btn-success btn-lg btn-block" type="submit">
				{id ? `Update` : 'Add new'} supplier
			</Button>
		</Form>
	);
};

export default SupplierDialog;
