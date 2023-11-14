import img1 from '../assets/saint26.jpg'

const About4 = () => {
  return (
    <div className="w-full h-full flex md:flex-col items-start md:items-center gap-[25px] mt-[5rem]">
      <div className="flex1  flex  justify-center">
        <img src={img1} alt="" className= "w-[600px] md:w-[500px]  object-cover" />
      </div>
      <div className="flex-1  mt-[200px] md:mt-[1rem] flex mx-5  gap-5">
        <div>
          <h1 className="font-monument uppercase  text-[10px] tracking-[5px]">OUR PRINCIPLES</h1>
        </div>
        <div className="flex flex-col md:gap-10 gap-20">
          <div>
            <p className="font-futura  text-[14px] leading-[1.6] tracking-wider">
            One of our goals is to change the perceived idea of success. We realised that focusing on money or fame just to seek acceptance, won't ever be fulfilling.
            </p>
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default About4