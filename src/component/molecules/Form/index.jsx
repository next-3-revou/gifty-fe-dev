// import React from 'react'

const Forms = () => {
  return (
	<>
		<form id="form-register" className="space-y-4">
			<div>
				<div className="relative">
					<input
						id="name"
						placeholder="Name"
						className="border w-full transition-all h-10 rounded-md text-sm pl-4 pr-4 placeholder-gray-600 focus:outline-blue-500 bg-white text-black dark:bg-gray-900 dark:text-white dark:focus:outline-blue-300 border-red-500 dark:border-red-400"
						autoComplete="off"
						type="text"
						defaultValue=""
						name="name"
					/>
				</div>
			</div>
			<div>
				<div className="relative">
					<input
						id="email"
						placeholder="Email"
						className="border w-full transition-all h-10 rounded-md text-sm pl-4 pr-4 placeholder-gray-600 focus:outline-blue-500 bg-white border-gray-300 text-black dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:outline-blue-300"
						autoComplete="off"
						type="text"
						defaultValue=""
						name="email"
					/>
				</div>
			</div>

			<div>
				<div className="relative">
					<input
						id="password"
						placeholder="Password"
						className="border w-full transition-all h-10 rounded-md text-sm pl-4 placeholder-gray-600 focus:outline-blue-500 bg-white border-gray-300 text-black dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:outline-blue-300 pr-11"
						autoComplete="off"
						type="password"
						defaultValue=""
						name="password"
					/>
				</div>
			</div>
		</form>
	</>

  )
}

export default Forms