/* eslint-disable react/prop-types */
import './styles.css'
import { Button } from 'antd';
import { UserOutlined, PlusOutlined, GiftOutlined } from '@ant-design/icons';
import './styles.css'

const Buttons = ({title, size, onClick,isIcon, types}) => {
  if(isIcon) {
    if(types === "profile") {
      return (
        <>
          <Button type="primary" icon={<UserOutlined />} shape="circle" className='bg-[#1FAD66]' size={"large"}  onClick={onClick} />
          <h4 className='text-black'>User</h4>         
        </>

      )
    } else if(types === "add") {
      return (
        <>
          <Button type="primary" icon={<PlusOutlined />} shape="circle" className='bg-[#1FAD66] h-16 !w-16' size={"large"} onClick={onClick} /> 
          <h4 className='text-black'>Add List</h4>
        </>
      )
    } else {
      return (
        <>
          <Button type="primary" icon={<GiftOutlined />} shape="circle" className='bg-[#1FAD66]' size={"large"}  onClick={onClick} /> 
          <h4 className='text-black'>History</h4>
        </>
      )
    }

  } else {
    return (
      <button className={`bg-[#1FAD66] text-white w-24 h-6 rounded-full p-0 `} onClick={onClick}>
        <p className={`text-${size ? 'lg' : 'sm'}`}>{title}</p>
      </button>    
    )
  }

}

export default Buttons