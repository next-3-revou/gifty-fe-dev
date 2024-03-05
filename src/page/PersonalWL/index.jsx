import React from 'react'
import { useNavigate  } from 'react-router-dom';
import Breadcrumb from '../../component/atom/Breadcrumb'
import Forms from '../../component/molecules/Form'

const PersonalWL = () => {

	const navigate = useNavigate();

	const saveWL = (e) => {
		e.preventDefault();
		navigate('/profile')
	}

	const onPrev = (e) => { 
		e.preventDefault();
		navigate(-1)
	}

  return (
    <main className="bg-gray-200">
			<section
				className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
				style={{ opacity: 1, transform: "none" }}
			>
				<section className="flex h-full flex-col overflow-x-hidden">
					<div className="container flex h-full flex-col pb-4 pt-6">
						<div className="flex h-full flex-col justify-between">
							<div className="mt-6">
								<div className="relative pb-20">
									<Breadcrumb title={"Wishlist Detail"} type={"detailwishlist"} onClick={(e) => onPrev(e)} />
									<Forms type={"personalwl"} onClick={(e) => saveWL(e)} />   
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>
  )
}

export default PersonalWL