/* eslint-disable react/prop-types */
import Buttons from '../../atom/Button'

const FormSignUp = ({title, onClick, onChangeName, onChangeEmail, onChangePW}) => {

  return (
		<>
			<div className="form-titles">
				<h3>{title}</h3>
			</div>
			<form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<input
						className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						onChange={onChangeName}
						placeholder="Name"
					/>
				</div>
				<div className="mb-4">
					<input
						className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						onChange={onChangeEmail}
						placeholder="Email"
					/>
				</div>
				<div className="mb-6">
					<input
						className="shadow appearance-none border border-[#969696] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						onChange={onChangePW}
						placeholder="Password"
					/>
				</div>
				<div className="flex items-center justify-center">
					<Buttons title={"Sign Up"} size={"sm"} onClick={onClick} />
				</div>
			</form>		
		</>
  )
}

export default FormSignUp