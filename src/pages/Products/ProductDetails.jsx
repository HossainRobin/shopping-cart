import React, { useState } from 'react'
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom'
import swal from 'sweetalert';

function ProductDetails() {
 
  const data = useLoaderData();

  const {id, title, price, description, category, image, rating} = data || {};  

    
const handleAddToFavourite = () => {
    const addedFavouriteItems = [];

    const favouriteItems = JSON.parse(localStorage.getItem("favourites"));

    if(!favouriteItems){
        addedFavouriteItems.push(data);
        localStorage.setItem("favourites", JSON.stringify(addedFavouriteItems));
        swal("Great!", "Product Added to Favourite!", "success");
    }else{
        
        const isExist = favouriteItems.find((data)=> data.id == id);

        if(!isExist){
            addedFavouriteItems.push(...favouriteItems, data);
            localStorage.setItem("favourites", JSON.stringify(addedFavouriteItems));
            swal("Great!", "Product Added to Favourite!", "success");
        }else{
            swal("Sorry!", "Product already added!", "error");
        }


       
    }
}

    














  return (
    <div>
        <div className='bg-grey'>
<div className="container px-5 py-24 mx-auto" >
  <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2 w-full h-64 lg:h-[500px] object-contain object-center rounded" src={image} />
    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest" >{category}</h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
      <div className="flex mb-4">


        <span className="flex items-center">

        <Rating  emptySymbol={<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>}
           fullSymbol={<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
         </svg>} initialRating={rating.rate} readonly />
          <span className='ml-2 -mt-1'>({rating.rate})</span>

          <span className="text-gray-600 ml-3 -mt-1">{rating.count} Reviews</span>
        </span>
      </div>
      <p className="leading-relaxed">{description}</p>
      
      <div className="flex mt-5 border-t-2 pt-5 border-gray-200">
        <span className="title-font font-medium text-2xl text-gray-900">${price} USD</span>
        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>
        <button onClick={handleAddToFavourite} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default ProductDetails