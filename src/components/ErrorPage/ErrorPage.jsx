import React from 'react';
import error from '../../assets/images/not-found-404.jpg';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mt-7'>
                <h1 className='text-4xl text-center'>Oops!</h1>
                <p className='text-2xl text-center'>Sorry, an unexpected error has occurred.</p>
                <img src={error} alt="" width="600px" />
            </div>

        </div>
    );
};

export default ErrorPage;