import React from 'react';
import './Product.css';

const Product = ({product}) => {
    console.log(product)
    const {name, username, email, address} = product;
    return (
        <div className='product-section'>
            <h2>Name : {name}</h2>
            <h3>User Name : {username}</h3>
            <p>Email : {email}</p>
            <p>Address : {address.city}</p>
        </div>
    );
};

export default Product;