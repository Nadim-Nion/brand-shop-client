import React from 'react';
import { Link } from 'react-router-dom';

const NoProductCard = () => {
    return (
        <div className=''>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sorry !</h2>
                    <p>No products are available</p>
                    <div className="card-actions justify-end">
                        <Link to="/">
                            <button className="btn btn-primary">Go to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoProductCard;