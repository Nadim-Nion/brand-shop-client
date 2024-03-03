import React, { useEffect, useState } from 'react';
import BrandCard from '../BrandCard/BrandCard';

const Brand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })

    }, []);

    return (
        <div className='m-6'>
            <h2 className='text-2xl font-semibold mb-2'>Brands</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-3'>
                {
                    brands.map(brand => <BrandCard
                        key={brand.id}
                        brand={brand}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;