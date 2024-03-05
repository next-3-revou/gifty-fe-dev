import React from 'react'
import { TextGeneral } from '../../atom/Text'

const CardWishlist = ({images,cardTitle,cardDesc, onClick}) => {
  return (
		<>
			<div className="card-wishlist p-6" onClick={onClick}>
				<div className="card-content flex p-2 rounded bg-gradient-to-b from-[#CACACA] via-[#CACACA] to-[#CDCDCD] to-64%">
					<div className="card-img">
						<img src={images} alt="" className='w-16 h-14' />
					</div>
					<div className="card-body">
						<div className="card-text text-black text-left">
							<TextGeneral label={cardTitle} size={"text-lg"} />
							<p>{cardDesc}</p>
						</div>
					</div>
				</div>
			</div>
		</>
    
  )
}

export default CardWishlist