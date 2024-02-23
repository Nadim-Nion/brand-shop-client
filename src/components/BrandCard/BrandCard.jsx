import React from 'react';

const BrandCard = ({ brand }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={brand.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand.name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Products</button>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;