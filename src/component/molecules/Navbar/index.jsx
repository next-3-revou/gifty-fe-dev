// import React from 'react'

import Buttons from "../../atom/Button"

const Navbar = () => {
	return (
		<div className="fixed inset-x-0 bottom-0 z-10 mx-auto flex min-h-[72px] max-w-[425px] items-center bg-white p-4">
			<div className="flex w-full justify-center ">
				<div className="menus px-2">
					<Buttons title={"User"} size={"lg"} />
				</div>
				<div className="menus px-2">
					<Buttons title={"List"} size={"lg"} />
				</div>
				<div className="menus px-2">
					<Buttons title={"History"} size={"lg"} />
				</div>
			</div>
		</div>
	)
}

export default Navbar