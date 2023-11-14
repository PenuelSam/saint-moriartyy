import img1 from "../assets/GOD's-Comandment3.jpg"

const About5 = () => {
  return (
    <div className="w-full h-full flex md:flex-col-reverse items-start md:items-center gap-[25px] md:mt-[2rem] ">
    <div className="flex-1  mt-[200px] md:mt-[1rem] flex mx-5  gap-[2rem]">
      <div>
        <h1 className="font-monument uppercase  text-[10px] tracking-[5px]">VIRALITY</h1>
      </div>
      <div className="flex flex-col md:gap-10 gap-20">
        <div>
          <p className="font-futura  text-[14px] leading-[1.6] tracking-wider">
          Our first big statement was when we gained over 60,000 followers overnight. Some people called it luck, but if there is something we are certain about is that the harder we work, the more luck we have.
          </p>
  
        </div>
      </div>
    </div>
    <div className="flex1  flex   relative bottom-[10rem] md:bottom-0">
      <img src={img1} alt="" className= "w-[600px] md:w-[500px]  object-cover" />
    </div>
  </div>
  )
}

export default About5