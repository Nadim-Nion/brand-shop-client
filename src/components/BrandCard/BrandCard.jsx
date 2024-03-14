import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brandProduct }) => {
    const { image, name } = brandProduct;

    return (
        <Link to={`/products/${name}`}>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                {/* <figure>
                    <img src={image} alt="" />
                </figure> */}
                <figure style={{ height: "200px", overflow: "hidden" }}>
                    <img src={image} alt="" style={{ objectFit: "cover", height: "100%" }} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${name}`}>
                            <button className="btn btn-primary">View Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;