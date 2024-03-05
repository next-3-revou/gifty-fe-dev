import React from 'react'
import Buttons from '../../atom/Button'
import { DatePicker, Input } from 'antd';

const { TextArea } = Input;

const FormPersonalWL = ({onClick, title, onChange, value}) => {

  return (
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
          placeholder="Title"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
          htmlFor="eventDate"
        >
          Event Date
        </label>
        <DatePicker onChange={onChange} className='shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      </div>
      <div className="mb-24">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
          htmlFor="description"
        >
          Description
        </label>
        <TextArea
          value={value}
          onChange={onChange}
          placeholder="Description"
          autoSize={{
            minRows: 3,
            maxRows: 5,
          }}
          className='shadow appearance-none border border-[#969696] rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />        
      </div>         
      <div className="flex items-center justify-end">
        <Buttons title={"Save"} size={"sm"} onClick={onClick} />
      </div>
    </form>
  )
}

export default FormPersonalWL