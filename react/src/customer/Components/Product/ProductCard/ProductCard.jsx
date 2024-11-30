import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  
   console.log("product",product)

  const handleNavigate=()=>{
    navigate(`/product/${id}`, {   // ProductDetails
      state: { product: product }
    })
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[20rem] rounded-lg'>
        <img className='h-full w-full object-cover p-4' src={imageUrl} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{title}</p>
            <p className=''>{brand}</p>
        
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>₹{discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{price}</p>
            <p className='text-green-600 font-semibold'>{discountPersent}% off</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;
