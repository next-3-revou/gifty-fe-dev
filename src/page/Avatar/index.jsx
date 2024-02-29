// import React from 'react'
import { Avatar} from 'antd';
import user from '../../uploads/images/user.png'
import Forms from '../../component/molecules/Form';
import './styles.css'

const Avatars = () => {	
	return (
		<>
			<main className="bg-gray-200">
				<section
					className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
					style={{ opacity: 1, transform: "none" }}
				>
					<section className="flex h-full flex-col overflow-x-hidden">
						<div className="container flex h-full flex-col pb-4 pt-6">
							<div className="flex h-full flex-col justify-between">
								<div className="mt-6">
									<div className="relative flex flex-col pb-20">
										<div className="title-page text-black pb-16">
											<p>Let setup</p>
											<p>your profile</p>
										</div>
										<div className="avatar-section pb-5">
										<Avatar size={125} src={user} />
										</div>
										<div className="avatar-content py-3">
											<Forms type={"avatar"} />												
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>
		</>			
	)
}
  
export default Avatars