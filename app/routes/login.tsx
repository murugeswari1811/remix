import type {  MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { redirect,type ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { setLoginDetails } from "~/redux/slice";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const login= useSelector(state=>state.counter.loginDetails)
  //console.log(login)
  const actionData=useActionData()
 // console.log("from the action hook",{actionData})
  return (
    <>
<div className="bg-[#fefce8] flex justify-center items-center h-screen">
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://t4.ftcdn.net/jpg/06/45/02/09/360_F_645020923_CpDvuysnHMK1CWPza8LRsY6Y5fxFUB46.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-bold mb-4 text-[#4158d0] text-center">Login Here!</h1>
  <form method="post">
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Username</label>
      <input 
      type="text" 
      id="username" 
      name="username" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"
      onKeyUp={(e)=>dispatch(setLoginDetails({...login,userName:e.target.value}))}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input 
      type="text" 
      id="password" 
      name="password" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"
      onKeyUp={(e)=>dispatch(setLoginDetails({...login,password:e.target.value}))}
      />
    </div>
    
    
    <button type="button" onClick={()=>navigate("/card")} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <Link to="/signup"><div className="mt-6 text-blue-500 text-center">
    <a href="#" className="hover:underline">Sign up Here</a>
  </div></Link>
</div>
</div>
    </>
  )
}

export default Login

export async function action({request}:ActionFunctionArgs){
  const formdata=await request.formData();
  const username=formdata.get("username")
  const password=formdata.get("password")
  // console.log({username,password})
  // return {username,password}
  return redirect(`/`)

}