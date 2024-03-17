import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const loadedProductDetails = useLoaderData();
    console.log(loadedProductDetails);
    const { brand, description, image, name, price, rating, type } = loadedProductDetails;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure><img src={image} alt="Album" className='h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{name}</h2>
                <p className='text-2xl font-semibold'>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Rating: {rating}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-between items-center">
                    <p className='text-3xl font-bold'>Price: ${price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;