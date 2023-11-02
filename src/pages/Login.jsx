import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-[500px] h-[400px] flex flex-col items-center my-10 bg-black text-white">
            <h1 className="uppercase text-[25px] my-10">Login</h1>
            <form action="" className="flex flex-col justify-center w-full  mx-10 items-center">
                <input type="email" placeholder="Email" className=" w-[400px] h-[40px] my-2 bg-transparent border  placeholder:text-white pl-5 border-gray-400 "/>
                <input type="password" placeholder="Password" className=" w-[400px] h-[40px] my-2 bg-transparent border border-gray-400  pl-5 placeholder:text-white"/>
                <button className=" w-[400px] h-[40px] my-2 bg-transparent border border-white placeholder:text-white">Sign In</button>
            </form>
            <div className="flex justify-between gap-10 mt-5 items-center">
                <Link to="/register"><h1 className="uppercase text-[18px]">Create Account</h1></Link>
                <div className="w-[10px] h-[10px] rounded-full bg-slate-200"></div>
                <Link to=''><h1 className="uppercase text-[18px]">Forgot Password</h1></Link>
            </div>
        </div>
    </div>
  )
}

export default Login