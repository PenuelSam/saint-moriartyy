/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */




import { useParams } from "react-router-dom"
import { Products } from "../data"
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch } from "react-redux";
import { setAddItem } from "../app/CartSlice";



const Details = () => {
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openQuestion2, setOpenQuestion2] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch()

 
  

  
    const {id} = useParams()


    const products = Products.find((product) => product.id === parseInt(id))
    console.log(products)

    const addItem = () => {
      dispatch(setAddItem(products))
    }

    const images = products.images

    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

  return (
    <div className="w-screen flex sm:flex-col">
        <div className="flex gap-5 sm:mx-2 sm:flex-col-reverse">
            <div className="flex flex-col sm:flex-row sm:justify-center sm:mt-2  gap-3 mt-10">
                {/*<div><img src={products.images[0]} alt="" className="w-[100px]  h-[100px] object-cover" /></div>
                <div><img src={products.images[1]} alt="" className="w-[100px]  h-[100px] object-cover" /></div>
                <div><img src={products.images[2]} alt="" className="w-[100px]  h-[100px] object-cover" /></div>
                <div><img src={products?.images[3]} alt="" className="w-[100px]  h-[100px] object-cover" /></div>*/}

      {images.map((img, index) => (
          <div
            key={index}
            className={`page-item ${currentIndex === index? 'active' : ''}`}
          >
            <img src={img} alt="" onClick={nextSlide} className="w-[100px] cursor-pointer  h-[100px] object-cover" />
              
          </div>
        ))}
            </div>

            <div className="">
            {<img src={products.images[currentIndex]} alt="" className="w-[600px]  h-[600px] object-cover" />}
            {/*{currentImages.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} className="w-[600px]  h-[600px] object-cover" />
            ))}*/}
            </div>

        </div>
        <div className="w-[500px] sm:w-full">
          <div>
            <div className=" w-[500px] mx-5 py-[20px] font-futura flex justify-between sm:flex-col sm:items-start items-center ">
              <h1 className="text-[20px]">{products.name}</h1>
              <p className="text-[20px]">&#8358;{products.price}</p>
            </div>
            <div className="pl-[20px] flex flex-col sm:flex-row gap-5 font-futura ">
              <h1 className="text-[20px]">Size:</h1>
              <div className="flex gap-3">
                <div className="border border-black  px-2"><h1>L</h1></div>
                <div className="border border-black  px-2"><h1>XL</h1></div>
              </div>
            </div>
            <button onClick={() => addItem()}  className="w-[500px] sm:w-[350px] border border-gray-200 font-futura  mx-5 mt-10 py-3">ADD TO CART</button>
          </div>
          <div className="m-5">
            <div className="flex justify-between items-center mt-10 border-b-[0.5px] pb-10 border-gray-200  w-[500px] sm:w-full">
            <h1   className="font-futura">Description</h1>
            {!openQuestion ? <KeyboardArrowDownIcon  onClick={() => setOpenQuestion(!openQuestion)} /> : <KeyboardArrowUpIcon onClick={() => setOpenQuestion(!openQuestion)} />}
            </div>
            {
              openQuestion && <p className="font-futura text-[15px] tracking-wider leading-[1.6] pt-20">{products.desc}</p>
            }
          </div>

          <div className="m-5">
            <div className="flex justify-between items-center mt-10 border-b-[0.5px] pb-10  border-gray-200 w-[500px] sm:w-full">
            <h1   className="font-futura">Delivery</h1>
            {!openQuestion2 ? <KeyboardArrowDownIcon  onClick={() => setOpenQuestion2(!openQuestion2)} /> : <KeyboardArrowUpIcon onClick={() => setOpenQuestion2(!openQuestion2)} />}
            </div>
            {
              openQuestion2 && <p className="font-futura text-[15px] tracking-wider leading-[1.6] pt-20">{products.delivery}</p>
            }
          </div>
          
        </div>
    </div>
  )
}

export default Details