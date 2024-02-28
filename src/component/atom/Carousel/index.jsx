/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
import './styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import front1 from '../../../uploads/images/front1.png'
import front2 from '../../../uploads/images/front-2.png'
import front3 from '../../../uploads/images/gifty-black1.png'
import Buttons from '../Button';
import CarouselList from '../CarouselList';


const Carousels = ({onClick}) => {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
    setCount(count+1)
  };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <CarouselList title={"Create your wishlist everywhere"} key={1} image={front1} />
        <CarouselList title={"Organize and share wishlist with communities"} key={2} image={front2} />
        <CarouselList title={"Share your wishes, Spread the joy"} key={3} image={front3} flip={true} isLast={true} onClick={onClick} />

      </Slider>
      <div style={{ textAlign: "center" }} className='button-sliders'>

        { count === 0 &&
          <Buttons title={"Next"} size={"xs"} onClick={next} />
        }

        { count === 1 &&
          <Buttons title={"Next"} size={"xs"} onClick={next} />
        }
      </div>
    </div>
  );
}

export default Carousels