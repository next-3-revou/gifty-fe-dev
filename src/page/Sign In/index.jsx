import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { Spin, message } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from "axios";
import { storeData } from '../../util';

const URL = import.meta.env.VITE_BE_ENDPOINT

const SignIn = () => {
  const navigate = useNavigate();
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();

	const [loading, setLoading] = useState(false)

	const initialValues = {
    email: '',
    password: ''
  }

	const validationSchema = yup.object({
    email: yup.string().required('This field required').email('Invalid format email'),
    password: yup.string().required('This field required')
                       .min(8, 'Password is too short - should be 8 chars minimum.')
                       .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })

	const handleLogin = async (values) => { 
		try {
			setLoading(true)
      const response = await axios.post(`${URL}/auth/login`, values , {
        headers: {
          "Content-Type": "application/json"
        }
      })

			if (response.status === 200) {
				setLoading(false)
				dispatch({type: 'ADD_TOKEN', payload: response.data.data})
				dispatch({type: 'ADD_USERID', payload: response.data.data})
				storeData('accessToken', response.data.data.token)
				storeData('userId', response.data.data.userId)
				storeData('hasSetUsername', response.data.data.hasSetUsername)

				const hasUsername = localStorage.getItem("hasSetUsername");
				const parsedItem = JSON.parse(hasUsername);

				messageApi.open({
          type: 'success',
          content: 'Login Success',
        })

				if(parsedItem === true) {
					navigate('/',{ replace: true })
				} else {
					navigate('/avatar',{ replace: true })
				}
			}


		} catch (error) {
			setLoading(false)
      messageApi.open({
        type: 'error',
        content: error.message,
      })
		}
	}

	const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleLogin,
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
										<div className="form-titles">
											<h2 className='text-black font-semibold mb-5 text-xl'>SIGN IN</h2>
										</div>									
										<form
											id="form-login"
											className="flex flex-col gap-y-4 px-4"
											data-gtm-form-interact-id={0}
											onSubmit={formMik.handleSubmit}
										>
											<div>
												<div className="relative">
													<label
														htmlFor="phone_number"
														className="text-black mb-2 block cursor-pointer text-left font-semibold"
													>
														Email
													</label>
													<input
														id="email"
														placeholder="Email"
														value={formMik.values.email || ''}
														onChange={formMik.handleChange('email')}
														type="email"
														className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
														name="email"
													/>
													{ formMik.errors.email && (
															<h2 className='form-error text-red-600 text-left font-semibold'>{formMik.errors.email}</h2>
													)}  
												</div>
											</div>
											<div>
												<div className="relative">
													<label
														htmlFor="password"
														className="text-black mb-2 block cursor-pointer text-left font-semibold"
													>
														Password
													</label>
													<input
														id="password"
														value={formMik.values.password || ''}
														onChange={formMik.handleChange('password')}													
														placeholder="Password"
														type="password"
														className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
														name="password"
													/>
													{ formMik.errors.password && (
															<h2 className='form-error text-red-600 text-left font-semibold'>{formMik.errors.password}</h2>
													)}  
												</div>
											</div>
										</form>
										<div className="fixed inset-x-0 bottom-0 z-10 mx-auto flex min-h-[72px] max-w-[425px] items-center bg-white p-4">
											<div className="flex w-full flex-col gap-y-2 text-center">
												<button
													id="btn-form-login"
													type='submit'
													onClick={formMik.handleSubmit}
													className="focus:outline-none focus:ring-blue-300 focus:ring-2 items-center inline-flex justify-center font-bold px-4 min-w-[80px] transition-colors bg-[#1FAD66] text-white hover:bg-blue-600 w-full h-10 text-sm rounded-md"
												>
													Lanjutkan
												</button>
												<Link to="/getstarted" className="text-primary block font-semibold">
													Sign Up
												</Link>
											</div>
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

export default SignIn