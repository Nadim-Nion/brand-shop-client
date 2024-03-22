import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCart from '../SingleCart/SingleCart';

const MyCart = () => {
    const loadedCart = useLoaderData();
    // console.log(loadedCart);
    const [carts, setCarts] = useState(loadedCart);
    return (
        <div>
            <h2 className='text-center text-3xl mt-4 font-semibold'>Your Selected Products</h2>
            {
                carts.length !== 0 ?
                    <>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 m-8'>
                            {
                                carts.map(cart => <SingleCart
                                    key={cart._id}
                                    cart={cart}
                                    carts={carts}
                                    setCarts={setCarts}
                                ></SingleCart>)
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className='flex justify-center items-center mt-8'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">No Products Available</h2>
                                    <p>Discover the wide array of offerings available in our store, offering a diverse selection of products waiting to be explored and purchased.</p>
                                    <div className="card-actions justify-end">
                                        <Link to="/">
                                            <button className="btn btn-primary">Go to Store</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyCart;