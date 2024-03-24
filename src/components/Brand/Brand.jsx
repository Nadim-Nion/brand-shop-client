import React, { useEffect, useState } from 'react';
import BrandCard from '../BrandCard/BrandCard';

const Brand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-six-gules.vercel.app/allCategories')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })

    }, []);



    return (
        <div className='m-6'>
            <h2 className='text-3xl font-bold mb-2 text-center'>Browse by brand</h2>
            <p className='text-center mb-4 text-xl'>Enhance your digital lifestyle with cutting-edge technological advancements.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    brands.map(brandProduct => <BrandCard
                        key={brandProduct._id}
                        brandProduct={brandProduct}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;