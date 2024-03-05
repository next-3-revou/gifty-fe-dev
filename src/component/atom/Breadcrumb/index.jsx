import React from 'react'
import close from '../../../uploads/images/close.png'
import left from '../../../uploads/images/left-chevron.png'
import { TextGeneral } from '../Text'

const Breadcrumb = ({type, title, onClick}) => {
  return (
    <div className='wrapper-menu flex items-center mb-32' onClick={onClick}>
        <div className="bread-icons px-4">
          { type === "newwishlist" &&
            <img src={close} alt="" className='w-6 h-6' />
          }
          { type === "detailwishlist" &&
            <img src={left} alt="" className='w-6 h-6' />
          }
        </div>
        <div className="bread-title text-black">
					<TextGeneral label={title} size={"text-3xl"} />
        </div>
    </div>
  )
}

export default Breadcrumb