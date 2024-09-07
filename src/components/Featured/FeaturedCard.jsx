import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function FeaturedCard({data}) {

  const {id, title, price, description, category, image, rating} = data || {};  


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-lg border border-gray-300">
        <figure>
          <img className="w-full h-56 object-contain pt-5"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          <p>Rating: {rating.rate} <span className="underline cursor-pointer">({rating.count}) reviews</span></p>
          <p><Rating  emptySymbol={<img className="w-5 h-5" src="../../../public/star-unfill.svg" />}
           fullSymbol={<img className="w-5 h-5" src="../../../public/star-fill.svg" />} initialRating={rating.rate} readonly /></p>
          <div className="card-actions w-full">
            <Link className="btn btn-gray-400 mt-4 w-full" to={`/product-details/${id}`} state={title}>
            See Details
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
