import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const productDeatails = useLoaderData();
    const {name, username, email, phone} = productDeatails;
    console.log(productDeatails)
    return (
        <div className='product-details'>
            <h1>This Is Product Details Page</h1>
            <h2>Name : {name}</h2>
            <h3>User Name : {username}</h3>
            <p>Phone : {phone}</p>
            <h4>Email : {email}</h4>

        </div>
    );
};

export default ProductDetails;