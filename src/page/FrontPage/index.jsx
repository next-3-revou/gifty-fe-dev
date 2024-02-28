import Carousels from '../../component/atom/Carousel'
import front1 from '../../uploads/images/front1.png'

const FrontPage = () => {
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
								<div className="relative pt-20 pb-20">
									<Carousels images={front1}/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>
  )
}

export default FrontPage