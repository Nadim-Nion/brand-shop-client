import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductCard/ProductsCard';
import NoProductCard from '../NoProductCard/NoProductCard';

const Product = () => {
    const loadedProducts = useLoaderData();
    // console.log(loadedProducts);

    return (
        <div>
            <div>
                {
                    /* loadedProducts.length !== 0 ?

                        loadedProducts.map(product => <ProductsCard
                            key={product._id}
                            product={product}
                        ></ProductsCard>)

                        :

                        <NoProductCard /> */

                    loadedProducts.length !== 0 ?
                        <>
                            <h2 className='text-3xl font-bold mb-2 text-center'>Explore Our Products</h2>
                            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6 m-20'>
                                {loadedProducts.map(product => <ProductsCard
                                    key={product._id}
                                    product={product}
                                ></ProductsCard>)}
                            </div>
                        </>

                        :
                        <NoProductCard />

                }
            </div>
        </div>
    );
};

export default Product;