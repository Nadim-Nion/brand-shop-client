import React from 'react';
import { Link } from 'react-router-dom';

const NoProductCard = () => {
    return (
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
    );
};

export default NoProductCard;