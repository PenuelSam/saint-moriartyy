import img1 from '../assets/saint23.jpg'
import img2 from '../assets/saint17.jpg'

const About2 = () => {
  return (
    <div className="w-full h-full flex md:flex-col-reverse items-start md:gap-2 gap-[70px]">
        <div className=' flex flex-col gap-5'>
            <div className='flex md:gap-10  md:mt-2 md:px-2 mt-[2rem] '>
                <div className='w-[700px] md:w-[100px]'>
                    <h1 className='font-monument text-[13px] uppercase tracking-[2px]'>BEHIND THE DESIGNS</h1>
                </div>
                <div>
                    <p className='font-futura  text-[16px] tracking-wide'>We strive for designs that embrace a modern attitude for a creative life, seamlessly blending comfort, minimalism and elegance in every cut.</p>
                </div>
            </div>
            <div className=' w-full flex justify-center h-[400px]'>
                <img src={img1}alt="" className='h-full w-full  md:w-[500px] object-cover'/>
            </div>
        </div>

        <div className='mb-32  md:mb-0 flex justify-center w-full md:mt-5'>
            <img src={img2} alt="" className='h-full w-full  md:w-[500px] object-cover' />
        </div>
    </div>
  )
}

export default About2