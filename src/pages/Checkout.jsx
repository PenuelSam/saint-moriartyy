import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, setClearItem } from "../app/CartSlice"

import { useState } from "react";
import { nigerianStates } from "../data";

const Checkout = () => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  //const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  //const {id, img, name, price, cartQuantity} = cartItems
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.cartQuantity), 0)

  /*const handleOrderConfirmation = () => {
        // Simulate a successful order confirmation
        // You can replace this with your actual order processing logic
        // Clear the cart
        dispatch(setClearItem({id, name, img, price, cartQuantity}));
      };*/

  return (
    <div className=" pt-[100px] check-container w-full text-white flex sm:flex-col-reverse gap-10 justify-between">
      <div className="flex-1 pl-[100px] sm:pl-0 sm:mx-5 sm:py-0   py-10" >
        <h1 className="text-[30px] py-3">Delivery</h1>
        <form action="" className="w-full flex flex-col gap-10">
        <input type="text" disabled placeholder="Country/Region" value="Nigeria" className="border p-5  h-[60px] w-full outline-none border-gray-400"/>
          <div className=" flex sm:flex-col   gap-10">
            <input type="text" placeholder="First name" className="border p-5  h-[60px] w-[300px] outline-none sm:w-full border-gray-400" />
            <input type="text"  placeholder="Last name" className="border p-5  h-[60px] w-[300px] sm:w-full outline-none border-gray-400"/>
          </div>
          <div className="flex flex-col gap-10">
            <input type="text" placeholder="Address" className="border p-5  h-[60px] w-full border-gray-400"/>
            <input type="text" placeholder="Apartment, suite, etc (optional)" className="border p-5  h-[60px] outline-none w-full border-gray-400"/>
          </div>
          <div className="flex sm:flex-col  gap-5">
            <input type="text" placeholder="City" className="border p-5  h-[60px] w-[200px] sm:w-full outline-none border-gray-400" />
            <select value={selectedState} onChange={handleStateChange} className="border w-[200px] outline-none sm:w-full sm:h-[60px] text-gray-400 px-5 border-gray-400" >
            <option value="">State</option>
            {nigerianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
            <input type="text"  placeholder="Zip Code" className="border p-5  h-[60px] w-[200px] sm:w-full outline-none border-gray-400"/>
          </div>
          <div className="flex flex-col gap-10">
            <input type="number" placeholder="Phone" className="border p-5  h-[60px] w-full border-gray-400 outline-none"/>
            <input type="email" placeholder="Email" className="border p-5  h-[60px] w-full border-gray-400 outline-none"/>
          </div>
          <button className="w-full sm:mb-10 bg-black text-white h-[60px]">Place Order</button>
        </form>
        
      </div>
      <div className="flex-1 p-[50px] h-[100%] flex flex-col sm:mt-5 sm:mx-5 gap-10 bg-black text-white ">
            <div className="flex flex-col gap-10">
            {cartItems.map((item, i)=>(
            <div key={i} className="flex justify-between items-center">
                <div className="flex gap-5">
                    <div className="relative">
                    <img src={item.img} alt="" className="w-[100px] h-[100px] object-cover" />
                    <div className="bg-black text-white w-[20px] h-[20px] rounded-full p-3 flex justify-center items-center absolute top-[-10px] right-[-5px]">{item.cartQuantity}</div>
                    </div>
                    <div>
                    <p>{item.name}</p>
                    </div>
                </div>
                <div>
                    
                    <p>{item.price * item.cartQuantity}</p>
                </div>
            </div>
        ))}
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <p>SubTotal :</p>
                    <p>{totalPrice}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping :</p>
                    <p>2000</p>
                </div>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="flex justify-between">
                    <p>TotalAmount :</p>
                    <p>{totalPrice + 2000}</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Checkout;
