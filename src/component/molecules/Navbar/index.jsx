// import React from 'react'

import Buttons from "../../atom/Button"

const Navbar = () => {

	const profilePage = (e) => { 
		e.preventDefault();
		console.log('tes')
	}

	const addWishlist = (e) => {
		e.preventDefault();
		console.log('add')
	}

	const historyPage = (e) => {
		e.preventDefault();
		console.log('history')
	}

	return (
		<div className="fixed inset-x-0 bottom-0 z-10 mx-auto flex min-h-[72px] max-w-[425px] items-center bg-white p-4">
			<div className="flex w-full justify-evenly items-end ">
				<div className="menus px-2">
					<Buttons isIcon={true} types={"profile"} title={"User"} size={"lg"} onClick={(e) => profilePage(e)} />
				</div>
				<div className="menus px-2">
					<Buttons isIcon={true} types={"add"} title={"User"} size={"lg"} onClick={(e) => addWishlist(e)} />
				</div>
				<div className="menus px-2">
					<Buttons isIcon={true} types={"history"} title={"User"} size={"lg"} onClick={(e) => historyPage(e)} />
				</div>
			</div>
		</div>
	)
}

export default Navbar