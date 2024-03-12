import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, Spin, message} from 'antd';
import user from '../../uploads/images/user.png'
import event from '../../uploads/images/event.png'
import { TextGeneral, TextLabel } from '../../component/atom/Text';
import { Tabs } from 'flowbite-react';
import Navbar from '../../component/molecules/Navbar';
import axios from "axios";

import './styles.css'
import { useState } from 'react';
const URL = import.meta.env.VITE_BE_ENDPOINT

const Profiles = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [load, setLoad] = useState(true)
	const [data, setData] = useState([])
	const [messageApi, contextHolder] = message.useMessage();

	useEffect(() => {
		if(load) {
			getProfile()
		}

	}, [])

	const detailsWL = (e, idWishlist, wishlistName) => {
		e.preventDefault();
		navigate(`/wishlist/detail/${idWishlist}/${wishlistName}`)
	}

	const getProfile = async () => {
		const tokens = JSON.parse(localStorage.getItem('accessToken'));
		const userId = JSON.parse(localStorage.getItem('userId'));

		try {
			const res = await axios.get(`${URL}/user/get/${userId}`, {headers: {
				Authorization: `Bearer ${tokens}`,
				'Content-Type': 'application/json',
			}})

			if(res.status === 200) {
				setLoad(false)
				setData(res.data.data)
			}

		} catch (error) {
			setLoad(false)
      messageApi.open({
        type: 'error',
        content: error.message,
      })
		}
	}

	const RenderFunc = (data) => {

		let personalWL = data.data.filter((wl) => wl.type === "PERSONAL");

		return(
			<div className='flex flex-wrap overflow-y-auto h-[38rem]'>
				{ personalWL.map((cur, key) => {
					return (
						<div className='flex-content w-1/2 p-6' key={key} onClick={(e) => detailsWL(e, cur.id, cur.title)}>
							<div className="event-content">
								<div className='event-images'>
									<img src={event} />
								</div>
								<div className="event-caption">
									<p className='text-black'>{cur.title}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		);

	}

	const RenderFuncCollab = (data) => {

		let collabWL = data.data.filter((wl) => wl.type === "COLLABORATIVE");

		return(
			<div className='flex flex-wrap overflow-y-auto h-[38rem]'>
				{collabWL.map((cur, key) => {
					return (
						<div className='flex-content w-1/2 p-6' key={key} onClick={(e) => detailsWL(e, cur.id, cur.title)}>
							<div className="event-content">
								<div className='event-images'>
									<img src={event} />
								</div>
								<div className="event-caption">
									<p className='text-black'>{cur.title}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		);

	}

	const RenderNull = () => {
		return (
			<p className='text-black'>Wishlist Empty</p>
		)
	}
	
  return (
		<>
			{contextHolder}
			<main className="bg-gray-200">
				<section
						className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
						style={{ opacity: 1, transform: "none" }}
				>
					<section className="flex h-full flex-col overflow-x-hidden">
						<div className="container flex h-full flex-col pb-4 pt-6">
							<div className="flex h-full flex-col justify-between">
									<div className="mt-6">
											<div className="relative pb-5">
												<div className="profile-sections pb-5 border-b-2 border-[#969696]">
													<div className="profile-section profile-section-avatars pb-2">
														<Avatar size={125} src={user} />  /
													</div>
													<div className="profile-section profile-section-details text-black pb-2">
														<TextGeneral label={data.name === undefined || data.name === '' ? 'loading': data.name } size={"text-xl"} textcolor={"text-black"} />
														<TextLabel props={"text-sm"} label={data.username === undefined || data.username === '' ? 'Loading' : data.username} />
													</div>
													<div className="profile-section profile-section-followers text-black flex justify-evenly">
														<div className="follow">
															<TextGeneral label={"0"} size={"text-xl"} textcolor={"text-black"} />
															<TextLabel props={"text-sm"} label={"Following"} />
														</div>
														<div className="follow">
															<TextGeneral label={"0"} size={"text-xl"} textcolor={"text-black"} />
															<TextLabel props={"text-sm"} label={"Follower"} />
														</div>
													</div>
												</div>
												<div className="profiles-tab">
													<Tabs aria-label="Pills" style="pills" className='justify-evenly mt-2'>
														<Tabs.Item active title="Personal">
														{ data !== undefined
																? ( data.wishlists !== undefined
																	? <RenderFunc data={data.wishlists} />
																	: <RenderNull />
																)
																:  <RenderNull />
														}																								
														</Tabs.Item>
														<Tabs.Item title="Collaboration">
														{ data !== undefined
																? ( data.wishlists !== undefined
																	? <RenderFuncCollab data={data.wishlists} />
																	: <RenderNull />
																)
																:  <RenderNull />
														}	
														</Tabs.Item>
													</Tabs>
												</div>
												<Navbar />
											</div>
									</div>
							</div>
						</div>
					</section>
			</section>
			{ load &&
				<div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
					<Spin size="large" />
				</div>
			}
		</main>
	</>

  )
}

export default Profiles