import { Link } from 'react-router-dom'
import logo from '../assets/Star-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalQuantity, setOpenCart } from '../app/CartSlice'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import gsap, {Power4 } from 'gsap';
import { useRef } from 'react';
//import { TweenMax } from 'gsap/gsap-core';
const Navbar = () => {
    
    const ULRef = useRef()
    const LogoRef = useRef()
    const cartRef = useRef()
    const TotalQty = useSelector(selectTotalQuantity)
    const dispatch = useDispatch()


    const onToggleCart = () => {
        dispatch(setOpenCart({
            CartState: true
        }))
    }

    useEffect(() => {
        
        const element1 = ULRef.current;
        const element2 = LogoRef.current;
        const element3 = cartRef.current;
        const Tl = new gsap.timeline();

        
        Tl
        .to(element2, {autoAlpha: 1, y: 5, duration: 2, ease: Power4.easeIn})
        .to(element1,  { autoAlpha: 1, y: 5, ease: Power4.easeIn}, '-=0.2')
        .to(element3, {autoAlpha:1, y: 5, ease: Power4.easeIn}, '-=0.6')
    },[])

  return (
    <div className="fixed z-[5] top-0 left-0 right-0 text-white">
        <nav className="navbar-Container sm:hidden block">
            <ul ref={ULRef} className="flex invisible  list-none">
                <li className="font-monument text-[15px] px-3 font-200 tracking-[1.5px]"><Link to="/shop">Shop</Link></li>
                <li className="font-monument text-[15px] px-3 font-200 tracking-[1.5px]"><Link to='/permanents'>Permanents</Link></li>
                <li className="font-monument text-[15px] px-3 font-200 tracking-[1.5px]"><Link to='lookbook'>Lookbook</Link></li>
            </ul>
            <div ref={LogoRef} className='flex flex-col invisible justify-center items-center'>
                <h1 className='font-monument text-[15px] tracking-[3px] mr-32 '><Link to="/">Saint Moriartyy</Link></h1>
                <div className='mr-32'>
                    <img src={logo} alt="" className='w-[50px] object-cover' />
                </div>
            </div>
            <div ref={cartRef} className="flex items-center gap-3 invisible">
            <ul className="flex items-center list-none">
               <Link to="/login" className='mx-3'><PersonIcon /></Link>
                <li className="font-monument text-[15px] font-200 tracking-[1.5px]"><Link to='/about'>About Us</Link></li>
            </ul>
            <div>
                <p className="font-monument text-[15px] font-200 tracking-[1.5px]" onClick={onToggleCart}><Link>Cart({TotalQty})</Link></p>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar