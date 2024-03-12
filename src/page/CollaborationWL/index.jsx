import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../../component/atom/Breadcrumb'
import { Spin, message,  DatePicker, Input } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from "axios";
import Buttons from '../../component/atom/Button';
import moment from 'moment';

const URL = import.meta.env.VITE_BE_ENDPOINT
const { TextArea } = Input;

const CollaborationWL = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [messageApi, contextHolder] = message.useMessage();
	const [loading, setLoading] = useState(false)

	const saveWL = async (values) => {
		const tokens = JSON.parse(localStorage.getItem('accessToken'));
		try {
			setLoading(true)

			const payload = {
				...values,
				type: 'COLLABORATIVE'
			}

      const responsed = await axios.post(`${URL}/wishlist`, payload, {
        headers: {
          Authorization: `Bearer ${tokens}`,
          'Content-Type': 'application/json',
        },
      });

			if(responsed.status === 200) {

				messageApi.open({
					type: 'success',
					content: responsed.message,
				})
        setTimeout(() => {
          navigate('/',{ replace: true })
        }, '2000');

			}


		} catch (error) {
			messageApi.open({
				type: 'error',
				content: error.message,
			})
		}
	}

	const onPrev = (e) => { 
		e.preventDefault();
		navigate(-1)
	}

	const initialValues = {
    title: '',
    eventDate: '',
    description: ''
  }

	const validationSchema = yup.object({
    title: yup.string().required('This field required'),
		eventDate: yup.string().required('This field required'),
		description: yup.string().required('This field required'),
  })

	const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: saveWL,
    validationSchema: validationSchema
  })

  return (
		<>
			{contextHolder}
			<main className="bg-gray-200">
				<section
					className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
					style={{ opacity: 1, transform: "none" }}
				>
					<section className="flex h-full flex-col overflow-x-hidden">
						<div className="container flex h-full flex-col pb-4 pt-6">
							<div className="flex h-full flex-col justify-between">
								<div className="mt-6">
									<div className="relative pb-20">
										<Breadcrumb title={"Wishlist Detail"} type={"detailwishlist"} onClick={(e) => onPrev(e)} />
										<form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={formMik.handleSubmit}>
											<div className="mb-4">
												<label
													className="block text-gray-700 text-sm font-bold mb-2 text-left"
													htmlFor="title"
												>
													Title
												</label>

												<input
													className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="title"
													type="text"
													value={formMik.values.title || ''}
													onChange={formMik.handleChange('title')}
													placeholder="Title"
												/>
												{ formMik.errors.title && (
														<h2 className='form-error text-red-600 text-left font-semibold'>{formMik.errors.title}</h2>
												)} 
											</div>
											<div className="mb-4">
												<label
													className="block text-gray-700 text-sm font-bold mb-2 text-left"
													htmlFor="eventDate"
												>
													Event Date
												</label>
												<DatePicker
													value={formMik.values.eventDate !== "" ? moment(formMik.values.eventDate) : ""}
													onChange={(value, dateString) =>{
														formMik.setFieldValue("eventDate", dateString)
													}} 
													className='shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
												/>
												{ formMik.errors.eventDate && (
														<h2 className='form-error text-red-600 text-left font-semibold'>{formMik.errors.eventDate}</h2>
												)} 
											</div>
											<div className="mb-24">
												<label
													className="block text-gray-700 text-sm font-bold mb-2 text-left"
													htmlFor="description"
												>
													Description
												</label>
												<TextArea
													value={formMik.values.description}
													onChange={formMik.handleChange('description')}
													placeholder="Description"
													autoSize={{
														minRows: 3,
														maxRows: 5,
													}}
													className='shadow appearance-none border border-[#969696] rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
												/>
												{ formMik.errors.description && (
														<h2 className='form-error text-red-600 text-left font-semibold'>{formMik.errors.description}</h2>
												)}        
											</div>         
											<div className="flex items-center justify-end">
												<Buttons title={"Save"} size={"sm"} />
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>
      { loading && 
				<div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
					<Spin size="large" />
				</div>
			} 
		</>
  )
}

export default CollaborationWL