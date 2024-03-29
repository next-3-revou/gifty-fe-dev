import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../component/atom/Breadcrumb'
import { Spin, message } from 'antd';
import gift from '../../uploads/images/gift-icon.png'
import axios from "axios";
import Buttons from '../../component/atom/Button';

const URL = import.meta.env.VITE_BE_ENDPOINT

const DetailWL = () => {
	const params = useParams()
	const navigate = useNavigate();

	const [messageApi, contextHolder] = message.useMessage();
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		if (loading) {
			getItemWL()
		}
	})


	const AddItem = () => {
		navigate('/addItem', { state: { wishlistId: params.wishlistId } })
	}

	const RenderFunc = (data) => {
		const nilai = data.data
		let itemWL = nilai

		return (
			<div className='flex flex-wrap overflow-y-auto h-[34rem]'>
				{itemWL.map((cur, key) => {
					return (
						<div className='flex-content w-1/2 p-6' key={key}>
							<div className="event-content">
								<div className='event-images'>
									<img src={gift} />
								</div>
								<div className="event-caption">
									<p className='text-black'>{cur.name}</p>
									<p className='text-black'>Rp {cur.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
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
			<>
				<div className='add-item-sections'>
					<p className='text-2xl text-[#969696] py-5'>No Items Found</p>
					<Buttons type={"add-item"} title={"Add Item"} onClick={(e) => AddItem(e)} />
				</div>

			</>
		)
	}

	const RenderButtons = () => {
		return (
			<>
				<div className='add-item-sections'>
					<Buttons type={"add-item"} title={"Add Item"} onClick={(e) => AddItem(e)} />
				</div>

			</>
		)
	}

	const getItemWL = async () => {
		const tokens = JSON.parse(localStorage.getItem('accessToken'));
		try {
			const res = await axios.get(`${URL}/wishlist-item/${params.wishlistId}`, {
				headers: {
					Authorization: `Bearer ${tokens}`,
					'Content-Type': 'application/json',
				}
			})

			if (res.status === 200) {
				setLoading(false)
				setData(res.data.data)
			}

		} catch (error) {
			messageApi.open({
				type: 'error',
				content: error.message,
			})
		}
	}

	const onPrev = (e) => {
		e.preventDefault();
		navigate(-1)
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
									<div className="relative pb-20">
										<Breadcrumb title={params.wishlistName} type={"detailwishlist"} onClick={(e) => onPrev(e)} />
										<div className="item-wishlist flex justify-center">
											{data.length > 0
												? (
													<>
														<RenderFunc data={data} />
													</>
												)
												: <RenderNull />
											}
										</div>
										{data.length > 0 &&
											<RenderButtons />
										}
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>
			{loading &&
				<div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
					<Spin size="large" />
				</div>
			}
		</>
	)
}

export default DetailWL