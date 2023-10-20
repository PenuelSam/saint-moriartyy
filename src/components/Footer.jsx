import logo from '../../src/assets/Star-icon.png'

const Footer = () => {
  return (
    <div className="bg-tertiary h-[70vh] sm:h-[100%]">
    <div className="footer-Container   text-white">
    <div className="flex w-full sm:flex-col sm:items-start sm:ml-[20px] justify-between items-center">
      <div className="left">
          <h1 className="py-5 font-futura font-bold tracking-[1.5px]">Join Our Newsletter. Be up to Date</h1>
      
        <div className="flex flex-col   items-start justify-center gap-5">
          <input type="text" placeholder="Enter Your Email Address" className="bg-[#f3f3f3] font-futura text-tertiary w-[300px] sm:w-full h-10 py-[15px] pl-5 rounded-md outline-none" />
          <button className="py-[12px] sm:px-10 sm:py-[8px] rounded-md px-16 bg-[#f3f3f3] tracking-[1.5px] font-futura text-tertiary ">Subscribe</button>
        </div>
      </div>
      <div className="flex sm:flex-col sm:gap-10 sm:mt-10 justify-between gap-20 font-futura">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-[20px] tracking-[1.5px]">About</h1>
          <ul className="list-none mt-5 ">
            <li className="pb-3 tracking-[1.5px]">About Us</li>
            <li className="pb-3 tracking-[1.5px]">Sustainability</li>
            <li className="pb-3 tracking-[1.5px]">Shipping</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-[20px] tracking-[1.5px]">Legal</h1>
          <ul className="list-none mt-5 ">
            <li className="pb-3 tracking-[1.5px]">Privacy</li>
            <li className="pb-3 tracking-[1.5px]">Terms and Conditions</li>
            <li className="pb-3 tracking-[1.5px]">Imprint</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-[20px] tracking-[1.5px]">Service</h1>
          <ul className="list-none mt-3 ">
            <li className="pb-3 tracking-[1.5px]">FAQ</li>
            <li className="pb-3 tracking-[1.5px]">Delivery</li>
            <li className="pb-3 tracking-[1.5px]">Support</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bottom">
        <div className='flex flex-col gap-5 items-center sm:items-start sm:ml-[20px] justify-start'>
          <div className='flex items-center gap-2'>
            <div>
              <img src={logo} alt="" width={50} />
            </div>
          <h1 className="text-white text-[25px] font-segoe">SAINT MORIARTYY</h1>
          </div>
          <p className='pl-5'>&copy; 2022 *saint. All rights reserved.</p>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Footer