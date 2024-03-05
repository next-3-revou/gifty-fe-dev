import React from 'react'
import { Select } from 'antd';
import Buttons from '../../atom/Button';

const { Option } = Select;

const FormPayment = ({title, onClick}) => {
  return (
		<>
			<div className="form-titles text-black">
				<p>{title}</p>
			</div>
			<form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<Select
						className="block appearance-none w-full text-left text-gray-700 bg-white border border-[#969696] hover:border-gray-500  leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Select a option and change input text above"
						// onChange={onGenderChange}
						allowClear
					>
						<Option value="male">Mastercard</Option>
						<Option value="female">Visa</Option>
						<Option value="other">Paypal</Option>
					</Select>            
				</div>
				<div className="mb-4">
					<input
						className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="text"
						type="accHoldername"
						placeholder="Account Holder Name"
					/>
				</div>
				<div className="mb-6">
					<input
						className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="accountNumber"
						type="number"
						placeholder="Account Number"
					/>
				</div>
				<div className="form-warning text-[#969696] text-left py-3.5">
					<p><span className="text-red-600">*</span>This payment information will automatically added as your payment info in split bill session</p>
				</div>
				<div className="flex items-center justify-center">
					<Buttons title={"Save"} size={"sm"} onClick={onClick} />
				</div>
			</form>
		</>
  )
}

export default FormPayment