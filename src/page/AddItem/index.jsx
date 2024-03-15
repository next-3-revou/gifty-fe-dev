import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message, Input, Form,Spin } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Buttons from '../../component/atom/Button';
import Breadcrumb from '../../component/atom/Breadcrumb'
import {useLocation} from 'react-router-dom'

const URL = import.meta.env.VITE_BE_ENDPOINT;
const { TextArea } = Input;

const AddItem = () => {
	const location = useLocation();
	const {wishlistId} = location.state;
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);

	const saveItem = async (values) => {
		const tokens = JSON.parse(localStorage.getItem('accessToken'));
		try {
			setLoading(true);
	
			const payload = {
				...values,
			};
	
			const responsed = await axios.post(`${URL}/wishlist-item/${wishlistId}`, payload, {
				headers: {
					Authorization: `Bearer ${tokens}`,
					'Content-Type': 'application/json',
				},
			});
	
			if (responsed.status === 200) {
				messageApi.open({
					type: 'success',
					content: responsed.data.message,
				});
				setTimeout(() => {
					navigate('/', { replace: true });
				}, 2000);
			}
	
		} catch (error) {
			messageApi.open({
				type: 'error',
				content: error.message,
			});
		}
	};
	
	

    const onPrev = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const initialValues = {
        name: '',
        link: '',
        price: '',
        details: '',
    };

    const validationSchema = yup.object({
        name: yup.string().required('This field required'),
        link: yup.string().required('This field required'),
        price: yup.number().required('This field required'),
        details: yup.string().required('This field required'),
    });

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: saveItem,
        validationSchema: validationSchema,
    });

    return (
        <>
            {contextHolder}
            <main className="bg-gray-200">
                <section className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
                    style={{ opacity: 1, transform: "none" }}>
                    <section className="flex h-full flex-col overflow-x-hidden">
                        <div className="container flex h-full flex-col pb-4 pt-6">
                            <div className="flex h-full flex-col justify-between">
                                <div className="mt-6">
                                    <div className="relative pb-20">
                                        <Breadcrumb title={"Add Item"} type={"additem"} onClick={(e) => onPrev(e)} />
                                        <Form 
                                            className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 text-left"
                                                    htmlFor="name">
                                                    Item Name
                                                </label>
                                                <input
                                                    className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formik.values.name || ''}
                                                    onChange={formik.handleChange}
                                                    placeholder="Name" />
                                                {formik.errors.name && (
                                                    <h2 className='form-error text-red-600 text-left font-semibold'>{formik.errors.name}</h2>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 text-left"
                                                    htmlFor="link">
                                                    Product Link
                                                </label>
                                                <input
                                                    className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="link"
                                                    name="link"
                                                    type="text"
                                                    value={formik.values.link || ''}
                                                    onChange={formik.handleChange}
                                                    placeholder="Link" />
                                                {formik.errors.link && (
                                                    <h2 className='form-error text-red-600 text-left font-semibold'>{formik.errors.link}</h2>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 text-left"
                                                    htmlFor="price">
                                                    Price
                                                </label>
                                                <input
                                                    className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="price"
                                                    name="price"
                                                    type="number"
                                                    value={formik.values.price || ''}
                                                    onChange={formik.handleChange}
                                                    placeholder="Price" />
                                                {formik.errors.price && (
                                                    <h2 className='form-error text-red-600 text-left font-semibold'>{formik.errors.price}</h2>
                                                )}
                                            </div>
                                            <div className="mb-24">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 text-left"
                                                    htmlFor="details">
                                                    Details
                                                </label>
                                                <TextArea
                                                    className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="details"
                                                    name="details"
                                                    value={formik.values.details || ''}
                                                    onChange={formik.handleChange}
                                                    placeholder="Details" />
                                                {formik.errors.details && (
                                                    <h2 className='form-error text-red-600 text-left font-semibold'>{formik.errors.details}</h2>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-end">
											<Buttons title={"Save"} size={"sm"} onClick={() => saveItem(formik.values)} />
											</div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            {loading &&
                <div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
                    <Spin size="large" />
                </div>
            }
        </>
    );
};

export default AddItem;
