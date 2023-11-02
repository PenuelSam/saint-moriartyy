import { Link } from "react-router-dom"


const Register = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-[600px] h-[550px] flex flex-col items-center my-10 bg-black text-white">
            <h1 className="uppercase text-[25px] my-5">Create Account</h1>
            <form action="" className="flex flex-col justify-center w-full  mx-10 items-center">
            <input type="text" placeholder="First Name" className=" w-[500px] h-[40px] my-3 bg-transparent border  placeholder:text-white pl-5 border-gray-400 "/>
            <input type="text" placeholder="Last Name" className=" w-[500px] h-[40px] my-3 bg-transparent border  placeholder:text-white pl-5 border-gray-400 "/>
                <input type="email" placeholder="Email" className=" w-[500px] h-[40px] my-3 bg-transparent border  placeholder:text-white pl-5 border-gray-400 "/>
                <input type="password" placeholder="Password" className=" w-[500px] h-[40px] my-3 bg-transparent border border-gray-400  pl-5 placeholder:text-white"/>
                <button className=" w-[500px] h-[40px] my-3 bg-transparent border border-white placeholder:text-white">Create</button>
            </form>
            <div className="flex flex-col gap-5 mt-5 items-center">
                <Link to="/login"><h1 className="uppercase text-[18px]">Log in</h1></Link>
                <div className="w-[500px] h-[0.1px] bg-slate-200"></div>
                <p className="text-center px-10 pb-5">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
        </div>
    </div>
 )
}

export default Register