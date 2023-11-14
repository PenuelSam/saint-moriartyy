import img1 from '../assets/saint28.jpg'
import img2 from '../assets/saint27.jpg'
import img3 from '../assets/saint29.jpg'
const About3 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className='w-[80%]  mb-[2rem] md:mt-[2rem] md:gap-[1rem] justify-center gap-[7rem] flex '>
        <div className=' w-[70%]'>
          <h1 className='font-monument uppercase md:text-[10px] tracking-[5px]'>A MOVEMENT</h1>
        </div>
        <div>
          <p className='font-futura  text-[14px] leading-[1.6] tracking-wider'>SAINT MORIARTYY is more than just clothing. It is a creative platform for the misfits, the outcasts and the wild to express themselves. Our garments aim to inspire the new generation to pursue their passion, orthodoxly or not, by empowering them to create without fear of judgement.</p>
        </div>
      </div>
      <div className='w-[80%] h-[40%] gap-5 flex'>
        <div className='h-[400px] md:h-[300px]  '>
          <img src={img2} alt="" className='h-full w-full object-cover rounded-tr-[10px] rounded-br-[10px]' />
        </div>
        <div className='h-[400px] md:h-[300px]  w-[700px] '>
          <img src={img1} alt="" className='h-full w-full object-cover rounded-[10px]' />
        </div>
        <div className='h-[400px] md:h-[300px] '>
          <img src={img3} alt="" className='h-full w-full object-cover rounded-tl-[10px] rounded-bl-[10px]' />
        </div>
      </div>
    </div>
  )
}

export default About3