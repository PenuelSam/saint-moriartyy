import { Link } from 'react-router-dom'
import logo from '../assets/Star-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalQuantity, setOpenCart } from '../app/CartSlice'
const Navbar = () => {
    const TotalQty = useSelector(selectTotalQuantity)
    const dispatch = useDispatch()


    const onToggleCart = () => {
        dispatch(setOpenCart({
            CartState: true
        }))
    }
  return (
    <div className="bg-tertiary text-white">
        <nav className="navbar-Container sm:hidden block">
            <ul className="flex list-none">
                <li className="font-futura px-3 font-200 tracking-[1.5px]"><Link to="/shop">Shop</Link></li>
                <li className="font-futura px-3 font-200 tracking-[1.5px]"><Link to='/permanents'>Permanents</Link></li>
                <li className="font-futura px-3 font-200 tracking-[1.5px]"><Link to='lookbook'>Lookbook</Link></li>
            </ul>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-futura tracking-[3px] ml-5'><Link to="/">Saint Moriartyy</Link></h1>
                <div>
                    <img src={logo} alt="" className='w-[50px] object-cover' />
                </div>
            </div>
            <div className="flex">
            <ul className="flex list-none">
                <li className="font-futura px-3 font-200 tracking-[1.5px]"><Link to='/about'>About Us</Link></li>
                <li className="font-futura px-3 font-200 tracking-[1.5px]"><Link to='sustainability'>Sustainability</Link></li>
            </ul>
            <div>
                <p className="font-futura px-3 font-200 tracking-[1.5px]" onClick={onToggleCart}><Link>Cart({TotalQty})</Link></p>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar