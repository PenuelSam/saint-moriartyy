import CloseIcon from '@mui/icons-material/Close';
import CartItem from '../cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartState, selectTotalAmount,  setCloseCart, setGetTotal } from '../app/CartSlice';
import CartEmpty from '../cart/CartEmpty';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//import { Products } from '../data';


const Cart = () => {
  const dispatch = useDispatch()

  const ifCartState = useSelector(selectCartState)
  const cartItems = useSelector(selectCartItems)
  const TotalAmount = useSelector(selectTotalAmount)
 

  useEffect(()=>{
    dispatch(setGetTotal())
  },[cartItems, dispatch])

  const onToggleCart = () => {
    dispatch(setCloseCart({
      CartState: false
    }))
  }

  return (
    <div className={`fixed  top-0 right-0 left-0 bottom-0 bg-black/50 w-full h-screen z-[250] ${ifCartState ? `opacity-100 visible translate-x-0` : `opacity-0 invisible translate-x-8`}`}>
        <div className="h-screen max-w-md w-full absolute right-0 bg-white">
        <div className='flex justify-between items-center border-b-2  p-5'>
            <div>
              <h1  className='text-[20px] font-futura'>Cart</h1>
            </div>
            <CloseIcon  onClick={onToggleCart} className='cursor-pointer' />
          </div>
          {cartItems.length === 0 ? <CartEmpty /> : <div className=''>
          <div  className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[70vh]  scroll-smooth scroll-hidden py-3 '>
            
            {cartItems?.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
            
          </div>
          <div className="fixed bottom-0 right-0  p-5  max-w-md w-full border-t-2 bg-white border-gray-200 flex flex-col gap-5 items-start">
      <p className="text-gray-500">Shipping & taxes calculated at checkout</p>
      <Link to='/checkout' className="bg-black text-white flex justify-center items-center  w-full h-[50px] rounded-sm" ><button onClick={onToggleCart} >CHECKOUT . {TotalAmount}</button></Link>
    </div>
          </div> }
          
        </div>
    </div>
  )
}

export default Cart