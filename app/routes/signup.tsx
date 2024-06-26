import { Link } from "@remix-run/react"
import { useDispatch,useSelector } from "react-redux"
import { setSignupDetails } from "~/redux/slice";
const Signup = () => {
	const dispatch=useDispatch();
	const sign=useSelector(state=>state.counter.signupDetails)
	//console.log(sign)
  return (
    <>
		<div className="h-screen w-screen overflow-hidden  bg-[#fefce8]">
			<div className="flex justify-center px-2 mt-4">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						className=" bg-gray-400 hidden lg:block lg:w-9/12 bg-cover rounded-l-lg"
						style={{backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/667/630/482/burger-dinner-food-hamburger-wallpaper-preview.jpg')"}}
					></div>
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center text-[#4158d0] font-bold">Sign Up Here!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
										onKeyUp={(e)=>dispatch(setSignupDetails({...sign,firstName:e.target.value}))}
										/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
									onKeyUp={(e)=>dispatch(setSignupDetails({...sign,email:e.target.value}))}

								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="*******"
										onKeyUp={(e)=>dispatch(setSignupDetails({...sign,password:e.target.value}))}

									/>
								</div>
								
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Sign Up
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
							<Link to="/login"><div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Already have an account? Login!
								</a>
							</div></Link>
						</form>
					</div>
				</div>
			</div>
		</div>

    </>
  )
}

export default Signup
