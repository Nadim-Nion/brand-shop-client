import React from 'react';
import Swal from 'sweetalert2';

const SingleCart = ({ cart, carts, setCarts }) => {
    const { brand, image, name, price, rating, type, _id } = cart;
    // console.log(cart);

    const handleRemove = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });

                            const remaining = carts.filter(item => item._id !== _id);
                            setCarts(remaining);
                        }
                    })
            }
        });

    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure><img src={image} alt="Album" className='h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{name}</h2>
                <p className='text-2xl font-semibold'>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-between items-center">
                    <p className='text-3xl font-bold'>Price: ${price}</p>
                    <button onClick={() => handleRemove(_id)} className="btn btn-primary">Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;