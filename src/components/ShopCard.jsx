import { Link } from "react-router-dom"
import { Shop } from "../data"
import { useState } from "react";

const ShopCard = () => {
    // eslint-disable-next-line no-unused-vars
    const [selectedImageId, setSelectedImageId] = useState(null);

  // Function to handle image click
  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 cursor-pointer">
        {Shop.map(({id,color, img, name, price, stock}) => (
            <>
            <Link to={`/product/${id}`} onClick={() => handleImageClick(id)}>
            <div key={id} className="card relative border-[3px]  mx-auto sm:mx-5 border-black">
                <span className={`absolute top-5 pl-5 ${color} span`}>{stock}</span>
                <div className="">
                    <img src={img} alt="" className="w-[700px]  h-[650px] object-cover" />
                </div>
                <div className="absolute bottom-[10px] desc flex justify-between items-center px-5  w-[600px] text-black ">
                    <h1>{name}</h1>
                    <p>&#8358;{price}</p>
                </div>
            </div>
            </Link>
            </>
        ))}
    </div>
  )
}

export default ShopCard