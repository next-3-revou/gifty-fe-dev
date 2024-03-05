import React from 'react'
import close from '../../../uploads/images/close.png'
import { TextGeneral } from '../Text'

const Breadcrumb = ({type, icons, title}) => {
  return (
    <div className='wrapper-menu flex items-center mb-32'>
        <div className="bread-icons px-4">
					<img src={close} alt="" className='w-6 h-6' />
        </div>
        <div className="bread-title text-black">
					<TextGeneral label={title} size={"text-3xl"} />
        </div>
    </div>
  )
}

export default Breadcrumb