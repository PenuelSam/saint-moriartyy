/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { setDecreaseItem, setIncreaseItem, setRemoveItem } from "../app/CartSlice"
import DeleteIcon from '@mui/icons-material/Delete';


const CartItem = ({item:{id, img, name, price, cartQuantity}}) => {

  const dispatch = useDispatch()

  const increaseItem = () => {
    dispatch(setIncreaseItem({id, img, name, price, cartQuantity}))
  }

  const decreaseItem = () => {
    dispatch(setDecreaseItem({id, img, name, price, cartQuantity}))
  }

  const removeItem = () => {
    dispatch(setRemoveItem({id, img, name, price, cartQuantity}))
  }


    
  return (
      <div  className='flex gap-10 p-5'>
               <div>
               <img src={img} alt="dream" className='w-[150px] h-[150px] object-cover ' />
               </div>
               <div className='flex flex-col gap-5'>
                <h1>{name}</h1>
                <p>&#8358;{price * cartQuantity}</p>
                <div className='flex gap-20 items-center cursor-pointer '>
                    <div className='flex border justify-between items-center h-[40px] px-2 w-[100px]'>
                        <p className='text-[30px] cursor-pointer' onClick={() => decreaseItem()}>-</p>
                        <p>{cartQuantity}</p>
                        <p className='text-[20px] cursor-pointer' onClick={() => increaseItem()}>+</p>
                    </div>
                    <div>
                      <DeleteIcon onClick={() => removeItem()}/>
                    </div>
                </div>
               </div>
    </div>
    
   
    
  )
}

export default CartItem