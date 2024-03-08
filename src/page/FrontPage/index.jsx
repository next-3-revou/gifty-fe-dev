import { useState } from 'react';
import { Modal, Spin, message } from 'antd';
import { useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from "axios";

import Carousels from '../../component/atom/Carousel'
import front1 from '../../uploads/images/front1.png'
// import Forms from '../../component/molecules/Form';
import './styles.css'
import Buttons from '../../component/atom/Button';

const URL = import.meta.env.VITE_BE_ENDPOINT

const FrontPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  const initialValues = {
    name: '',
    email: '',
    password: ''
  }

  
	const tesClick = () => {
		setOpen(true);
	}

  const handleOk = () => { 
    setOpen(false);
  }

  const handleCancel = () => { 
    setOpen(false);
  }

  const paymentPage = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post(`${URL}/auth/register`, formMik.values , {
        headers: {
          "Content-Type": "application/json"
        }
      })
      
      if(response.status === 200) {
        navigate('/avatar')
      }
    } catch (error) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: error.message,
      })

    }
    // navigate('/avatar')
  }

  const validationSchema = yup.object({
    name: yup.string().required('This field required'),
    email: yup.string().required('This field required').email('Invalid format email'),
    password: yup.string().required('This field required')
                       .min(8, 'Password is too short - should be 8 chars minimum.')
                       .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: paymentPage,
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
                    <Carousels images={front1} onClick={() => tesClick()} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Modal
          title={"SIGN UP"}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >

        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={formMik.values.name || ''}
              onChange={formMik.handleChange('name')}
              placeholder="Name"
            />
            { formMik.errors.name && (
                <h2 className='form-error'>{formMik.errors.name}</h2>
            )}            
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              value={formMik.values.email || ''}
              onChange={formMik.handleChange('email')}              
              type="email"
              placeholder="Email"
            />
            { formMik.errors.email && (
                <h2 className='form-error'>{formMik.errors.email}</h2>
            )}             
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={formMik.values.password || ''}
              onChange={formMik.handleChange('password')}                 
              type="password"
              placeholder="Password"
            />
            { formMik.errors.password && (
                <h2 className='form-error'>{formMik.errors.password}</h2>
            )}             
          </div>
          <div className="flex items-center justify-center">
            <Buttons title={"Sign Up"} size={"sm"} onClick={(e) => paymentPage(e)} />
          </div>
        </form>		
        </Modal>
      </main>
      { loading && 
					<div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
						<Spin size="large" />
					</div>
				}      
    </>

  )
}

export default FrontPage