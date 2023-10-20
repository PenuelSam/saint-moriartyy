/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    CartState: false,
    CartItems: [],
    CartTotalQuantity: 0,
    CartTotalAmount: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setOpenCart: (state, action) => {
            state.CartState = action.payload.CartState
        },
        setCloseCart: (state, action) => {
            state.CartState = action.payload.CartState
        },
        setAddItem: (state, action) => {
            const itemIndex = state.CartItems.findIndex((item) => {
                return item.id === action.payload.id
            })
            if(itemIndex >= 0){
                state.CartItems[itemIndex].cartQuantity +=1

                toast.success(`Item QTY Increased`)
            }else {
                const temp = {...action.payload, cartQuantity: 1}
                state.CartItems.push(temp)
                toast.success(`Item Added To Cart`)
            }
        },
        setIncreaseItem: (state, action) => {
            const itemIndex = state.CartItems.findIndex((item) => {
                return item.id === action.payload.id
            })
            if(itemIndex >= 0){
                state.CartItems[itemIndex].cartQuantity +=1

                toast.success(`Item QTY Increased`)
            }
        },
        setDecreaseItem: (state, action) => {
            const itemindex = state.CartItems.findIndex((item) => {
                return item.id === action.payload.id
            })
            if(state.CartItems[itemindex].cartQuantity > 1){
                state.CartItems[itemindex].cartQuantity -=1

                toast.success(`Item QTY Decreased`)
            }
        },
        setRemoveItem: (state, action) => {
            const removeItem = state.CartItems.filter((item) => {
                return item.id !== action.payload.id
            })
            state.CartItems = removeItem
            toast.success(`Item Removed`)
        },
        setClearItem: (state, action) => {
            state.CartItems = []
            toast.success(`Cart Cleared`)
        },
        setGetTotal: (state, action) => {
            let {totalAmount, totalQTY} = state.CartItems.reduce((cartTotal, cartItem)=> {
                const {price, cartQuantity} = cartItem;
                const totalPrice = price * cartQuantity;
        
                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;
        
                return cartTotal;
              }, {
                    totalAmount: 0,
                    totalQTY: 0,
                });
        
                state.CartTotalAmount = totalAmount;
                state.CartTotalQuantity = totalQTY;
        }
    }
})

export const {setOpenCart, setCloseCart, setAddItem, setIncreaseItem, setDecreaseItem, setRemoveItem,setClearItem, setGetTotal} = CartSlice.actions

export const selectCartState = (state) => state.cart.CartState
export const selectCartItems = (state) => state.cart.CartItems
export const selectTotalAmount = (state) => state.cart.CartTotalAmount
export const selectTotalQuantity = (state) => state.cart.CartTotalQuantity

export default CartSlice.reducer