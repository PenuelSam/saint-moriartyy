import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center text-white overflow-hidden bg-tertiary">
    
            <Link to="/shop" className="btn relative"  >
                <span className="w-30 absolute top-[25%] left-[25%] tracking-[1.5px]">Shop Now</span>
            </Link>
    </div>
  )
}

export default Banner 