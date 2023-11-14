import About1 from "../components/About1"
import About2 from "../components/About2"
import About3 from "../components/About3"
import About4 from "../components/About4"
import About5 from "../components/About5"
import star from "../assets/Star-icon.png"
import { useEffect, useRef } from "react"
import gsap, { Power4 } from "gsap"


const About = () => {
  const textRef = useRef();

  useEffect(() => {
    const TEXT = textRef.current

    gsap.fromTo(TEXT, {x: 1300}, {x:-1300, duration: 20, ease: Power4 , repeat: Infinity})
  },[])

  return (
    <div className="pt-[100px] mb-[5rem] text-white w-full h-full">
      <div className="mt-[2rem] w-full">
          <div className="h-[1px] w-full bg-white"></div>
          <div ref={textRef}  className="flex items-center gap-3 ">
            <h1 className=" font-monument w-[200px] md:w-full   text-[12px] md:text-[10px]  uppercase tracking-[5px]">About.US</h1>
            <div><p className="w-[10px] h-[10px]   bg-white  rounded-full"></p></div>
            <h1 className=" font-monument w-full text-[12px] md:text-[10px]   uppercase tracking-[5px] flex items-center mr-[2rem] ">Saint <img src={star} alt="" className="w-[30px]  object-cover relative bottom-1" /> Moriartyy</h1>
            <h1 className=" font-monument md:w-full text-[12px] md:text-[10px]  w-[200px]  uppercase tracking-[5px]">About.US</h1>
            <div><p className="w-[10px] md:hidden h-[10px] bg-white rounded-full"></p></div>
            <h1 className=" font-monument w-full text-[12px] md:text-[10px]   uppercase tracking-[5px] flex items-center mr-[2rem]">Saint <img src={star} alt="" className="w-[30px]  object-cover relative bottom-1" /> Moriartyy</h1>
            <h1   className=" font-monument text-[12px]  w-[200px]  uppercase tracking-[5px]">About.US</h1>
            <div ><p className="w-[10px] h-[10px] bg-white rounded-full"></p></div>
            <h1  className=" font-monument text-[12px]  w-full  uppercase tracking-[5px] flex items-center mr-[2rem]">Saint <img src={star} alt="" className="w-[30px] object-cover relative bottom-1" /> Moriartyy</h1>
           <p className="font-monument  text-[12px] uppercase tracking-[5px]">&copy;2023</p>
            
          </div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>
      <div className="max-w-[1300px]  mx-auto">
      <About1 />
      <About2 />
      <About3 />
      <About4 />
      <About5 />
      <div className="mx-[2rem]">
        <p className=" text-start text-[12px] font-futura mt-[5rem] uppercase tracking-[1px]">Early on we realised the traditional path did not fit us: go to university, get the job that your parents told you to, pay your mortgage… Following our principles we itched to start working. Because you are the only person stopping yourself from doing what you love.</p>
        <h1 className="text-center font-monument mt-[2rem] uppercase tracking-[5px]">JOIN THE MOVEMENT NOW</h1>
      </div>
      </div>
    </div>
  )
}

export default About