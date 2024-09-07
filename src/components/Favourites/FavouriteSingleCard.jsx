import React from 'react'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

function FavouriteSingleCard({data}) {

    const {id, title, price, description, category, image, rating} = data || {};  


  return (
    <div>
        <div>
      <div className="card w-96 bg-base-100 shadow-lg border border-gray-300">
        <figure>
          <img className="w-full h-56 object-contain pt-5"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <Link to={`/product-details/${id}`}>
             <h2 className="card-title">{title}</h2>
          </Link>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FavouriteSingleCard