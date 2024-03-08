import React, { useState } from 'react'
import { Avatar} from 'antd';
import { useNavigate  } from 'react-router-dom';
import { Spin, message } from 'antd';
import user from '../../uploads/images/user.png'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from "axios";
import Buttons from '../../component/atom/Button';

import './styles.css'
const URL = import.meta.env.VITE_BE_ENDPOINT


const Avatars = () => {	
  const navigate = useNavigate();
	const tokens = JSON.parse(localStorage.getItem('accessToken'));

	const [messageApi, contextHolder] = message.useMessage();

	const [loading, setLoading] = useState(false)

  const toPaymentPage = async (values) => {
		try {
			setLoading(true)
      const response = await axios.put(`${URL}/user/set-username`, values, { 
        headers: {
          Authorization: `Bearer ${tokens}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

			console.log(response)
		} catch (error) {
			setLoading(false)
			messageApi.open({
				type: 'error',
				content: error.message,
			})
		}
  }
	

	const initialValues = {
    username: '',
  }

	const validationSchema = yup.object({
		username: yup.string().required('This field required'),
  })

	const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: toPaymentPage,
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
									<div className="relative flex flex-col pb-20">
										<div className="title-page text-black pb-16">
											<p>Let setup</p>
											<p>your profile</p>
										</div>
										<div className="avatar-section pb-5">
										<Avatar size={125} src={user} />
										</div>
										<div className="avatar-content py-3">
											<form onSubmit={formMik.handleSubmit}>
												<div className="mb-4 pb-32">
													<input
														className="shadow appearance-none border border-[#969696] rounded w-9/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
														value={formMik.values.username || ''}
														onChange={formMik.handleChange('username')}
														id="username"
														type="text"
														placeholder="Username"
													/>
													{ formMik.errors.username && (
														 <h2 className='form-error text-black font-semibold'>{formMik.errors.username}</h2>
													)}
												</div>
												<div className="flex items-center justify-center">
													<Buttons title={"Next"} size={"sm"} />
												</div>												
											</form>										
										</div>
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
  
export default Avatars