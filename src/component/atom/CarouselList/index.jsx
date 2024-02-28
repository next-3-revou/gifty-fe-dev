import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'
import Buttons from '../Button';

const CarouselList = ({key, title, image, flip, isLast, onClick}) => {
  if(flip) {
    return (
      <div>
        <div className="thumbnail">
            <img className='w-50 h-50 rounded-full' src={image} />
        </div>         
        <div className="title-slider">
            <h3 className='text-black'>{title}</h3>
        </div>
        { isLast &&
          <Buttons title={"Get Started"} size={"xs"} onClick={onClick} />
        }
      </div>
    )
  } else {
    return (
      <div>
        <div className="title-slider">
            <h3 className='text-black'>{title}</h3>
        </div>
        <div className="thumbnail">
            <img className='w-50 h-50 rounded-full' src={image} />
        </div>        
      </div>
    )
  }
}

export default CarouselList