import React from 'react';

const ProductsCard = ({ product }) => {
    // console.log(product);
    const { image, name, brand, type, price, rating, _id } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                {/* <figure><img src={image} alt="Shoes" /></figure> */}
                <figure style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                    <img src={image} alt="Products" style={{ width: "100%", height: "auto" }} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;