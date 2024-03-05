/* eslint-disable react/prop-types */
// import React from 'react'

import Buttons from "../../atom/Button"
import { Select } from 'antd';
// import { Routes, Route, useParams, useNavigate  } from 'react-router-dom';
import './styles.css'
import FormSignUp from "../FormSignUp";
import FormAvatar from "../FormAvatar";
import FormPayment from "../FormPayment";
const { Option } = Select;

const Forms = ({type, onClick, title}) => {

  if(type === 'signup') {
    return (
      <FormSignUp title={title} onClick={onClick} />
    )
  } else if(type === "payment") {
    return (
      <FormPayment title={title} onClick={onClick} />
    )
  } else if(type === 'avatar'){
    return (
      <FormAvatar title={title} onClick={onClick} />
    )
  } else {
    return (
      <>
        <div className="mb-4 pb-32">
          <input
            className="shadow appearance-none border border-[#969696] rounded w-9/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center justify-center">
          <Buttons title={"Next"} size={"sm"} onClick={onClick} />
        </div>
      </>
    )    
  }
}

export default Forms