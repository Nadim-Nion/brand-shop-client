import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const loadedProductDetails = useLoaderData();
    // console.log(loadedProductDetails);
    const { brand, description, image, name, price, rating, type, _id } = loadedProductDetails;

    const handleAddToCart = (_id) => {
        console.log(_id);

        fetch("http://localhost:5000/cart", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loadedProductDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your product has been added to the cart',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

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
                    <button onClick={() => handleAddToCart(_id)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;