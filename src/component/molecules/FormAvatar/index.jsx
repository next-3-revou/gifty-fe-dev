import React from 'react'
import Buttons from '../../atom/Button'

const FormAvatar = ({onClick}) => {
  return (
		<>
			<div className="mb-4 pb-32">
				<input
					className="shadow appearance-none border border-[#969696] rounded w-9/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Username"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Buttons title={"Next"} size={"sm"} onClick={onClick} />
			</div>
		</>
  )
}

export default FormAvatar