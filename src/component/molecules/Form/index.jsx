/* eslint-disable react/prop-types */
// import React from 'react'

import Buttons from "../../atom/Button"
import { Select } from 'antd';
// import { Routes, Route, useParams, useNavigate  } from 'react-router-dom';
import './styles.css'
import FormSignUp from "../FormSignUp";
import FormAvatar from "../FormAvatar";
import FormPayment from "../FormPayment";
import FormPersonalWL from "../FormPersoWL";
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
			<FormPersonalWL title={title} onClick={onClick} />
    )    
  }
}

export default Forms