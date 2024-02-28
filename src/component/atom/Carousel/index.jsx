/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import './styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import front1 from '../../../uploads/images/front1.png'
import front2 from '../../../uploads/images/front-2.png'
import front3 from '../../../uploads/images/gifty-black1.png'
import Buttons from '../Button';


const Carousels = () => {
  const [count, setCount] = useState(0)

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
        <div key={1}>
            <div className="title-slider">
              <h3 className='text-black'>Create your wishlist everywhere</h3>
            </div>
            <div className="thumbnail">
              <img className='w-50 h-50 rounded-full' src={front1} />
            </div>
        </div>
        <div key={2}>
          <div className="title-slider">
            <h3 className='text-black'>Organize and share wishlist with communities</h3>
          </div>
          <div className="thumbnail">
            <img className='w-50 h-50 rounded-full' src={front2} />
          </div>
        </div>
        <div key={3}>
          <div className="thumbnail">
            <img className='w-50 h-50 rounded-full' src={front3} />
          </div>
          <div className="title-slider">
            <h3 className='text-black'>Share your wishes, Spread the joy</h3>
          </div>
          <div style={{ textAlign: "center" }} className='button-sliders'>
          { count === 2 && 
            <Link to="/signup">
              <Buttons title={"Get Started"} size={"xs"} />
            </Link>
          }
      </div>             
        </div>
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