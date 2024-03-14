import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductCard/ProductsCard';
import NoProductCard from '../NoProductCard/NoProductCard';

const Product = () => {
    const loadedProducts = useLoaderData();
    // console.log(loadedProducts);

    return (
        <div>
            <h2>Products Count: </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-3 m-20'>
                {
                    loadedProducts.length !== 0 ?

                        loadedProducts.map(product => <ProductsCard
                            key={product._id}
                            product={product}
                        ></ProductsCard>)

                        :

                        <NoProductCard />

                    /*  <div className="card w-96 bg-neutral text-neutral-content">
                         <div className="card-body items-center text-center">
                             <h2 className="card-title">Opps!</h2>
                             <p>No products are available</p>
                             <div className="card-actions justify-end">
                                 <Link to="/">
                                     <button className="btn btn-primary">Go to Home</button>
                                 </Link>
                             </div>
                         </div>
                     </div> */

                }
            </div>
        </div>
    );
};

export default Product;