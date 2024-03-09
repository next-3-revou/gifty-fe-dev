// import React from 'react'
import Forms from '../../component/molecules/Form'
import { useNavigate  } from 'react-router-dom';
import { Select, Spin, message} from 'antd';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from "axios";
import Buttons from '../../component/atom/Button';
import { useState } from 'react';

const URL = import.meta.env.VITE_BE_ENDPOINT

const { Option } = Select;

const Payment = () => {
  const userID = useSelector(state => state.users.users);
  const tokens = JSON.parse(localStorage.getItem('accessToken'));
	const navigate = useNavigate();

  console.log(userID.id)

  const [messageApi, contextHolder] = message.useMessage();
	const [loading, setLoading] = useState(false)
  
  const toProfilePage = async (values) => {
    console.log(values)

    try {
      // const response = await axios.post(`${URL}/auth/login`, values , {
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })
      const params = {
        userId: userID,
      };

      const responsed = await axios.post(`${URL}/user/payment-info`, values, {
        params,
        headers: {
          Authorization: `Bearer ${tokens}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      console.log(responsed)
    } catch (error) {
      console.log(error)
    }
  }

  const initialValues = {
    paymentMethod: '',
    accountHolder: '',
    accountNumber: ''
  }

  const validationSchema = yup.object({
    paymentMethod: yup.string().required('This field required'),
    accountHolder: yup.string().required('This field required'),
    accountNumber: yup.string().required('This field required'),
  })

  
	const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: toProfilePage,
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
                  <div className="relative pt-20 pb-20">
                    {/* <Forms type={"payment"} title={"One more to go, add your Payment Information"} onClick={(e) => profilePage(e)} /> */}
                    <div className="form-titles text-black">
                      <p>One more to go, add your Payment Information</p>
                    </div>
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={formMik.handleSubmit}>
                      <div className="mb-4">
                        <Select
                          className="block appearance-none w-full text-left text-gray-700 bg-white border border-[#969696] hover:border-gray-500  leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Select a option and change input text above"
                          // onChange={onGenderChange}
                          value={formMik.values.paymentMethod || ''}
                          onChange={formMik.handleChange('paymentMethod')}
                          allowClear
                        >
                          <Option value="mastercard">Mastercard</Option>
                          <Option value="visa">Visa</Option>
                          <Option value="paypal">Paypal</Option>
                        </Select>
                        { formMik.errors.paymentType && (
														 <h2 className='form-error text-black text-left font-semibold'>{formMik.errors.paymentType}</h2>
												)}            
                      </div>
                      <div className="mb-4">
                        <input
                          className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="accHoldername"
                          value={formMik.values.accountHolder || ''}
                          onChange={formMik.handleChange('accountHolder')}                          
                          type="text"
                          placeholder="Account Holder Name"
                        />
                        { formMik.errors.accountCardHolder && (
                            <h2 className='form-error text-black text-left font-semibold'>{formMik.errors.accountCardHolder}</h2>
                        )}
                      </div>
                      <div className="mb-6">
                        <input
                          className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="accountNumber"
                          value={formMik.values.accountNumber || ''}
                          onChange={formMik.handleChange('accountNumber')}   
                          type="number"
                          placeholder="Account Number"
                        />
                        { formMik.errors.accountCardNumber && (
                            <h2 className='form-error text-left text-black font-semibold'>{formMik.errors.accountCardNumber}</h2>
                        )}
                      </div>
                      <div className="form-warning text-[#969696] text-left py-3.5">
                        <p><span className="text-red-600">*</span>This payment information will automatically added as your payment info in split bill session</p>
                      </div>
                      <div className="flex items-center justify-center">
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

export default Payment