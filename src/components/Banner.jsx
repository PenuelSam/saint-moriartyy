//import { Link } from "react-router-dom"
  import Video from "../assets/stars.mp4"
  import star from "../assets/star-icon.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Link } from "react-router-dom"
const Banner = () => {

  const starRef = useRef()
  const btnRef = useRef()

  useEffect(() => {
    const STAR = starRef.current
    const btn = btnRef.current
    const Tl = gsap.timeline()
    Tl
    .fromTo(STAR, {autoAlpha: 0 , x: -100 , scale: 20, delay: 2}, {autoAlpha: 1, x: 0, scale: 5, delay: 2, duration: 0.2})
    .to(STAR, {scale:0.7, duration: 2} )
    .fromTo(btn, {autoAlpha: 0, y: -50}, {autoAlpha: 1}, '-=0.2')
  },[])
  

  return (
    <div className="relative w-full h-[100vh] z-[1] flex justify-center items-center text-white overflow-hidden">
      <video 
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className='w-full h-full object-cover z-[-1] bg-clip-content'
      >
        <source type='video/mp4' src={Video} />
      </video>

        <div className="absolute  left-[49%] z-[-1] w-[50px]">
          <img ref={starRef} src={star} alt="" className="invisible" />
        </div>
      
          <Link to="/shop" ref={btnRef} className="btn z-[5] absolute top-[80%] left-[46%]"  >
                <span className="w-30 absolute top-[25%] left-[25%] tracking-[1.5px]">Shop Now</span>
  </Link>
    </div>
  )
}

export default Banner 