/* eslint-disable react/prop-types */
import './styles.css'

const Buttons = ({title, size, onClick}) => {
  return (
    // <button className="bg-[#1FAD66] text-white font-bold w-24 h-6 rounded-full">
    // {title}
    // </button>
    <button className={`bg-[#1FAD66] text-white w-24 h-6 rounded-full p-0 `} onClick={onClick}>
      <p className={`text-${size ? 'lg' : 'sm'}`}>{title}</p>
    </button>    
  )
}

export default Buttons