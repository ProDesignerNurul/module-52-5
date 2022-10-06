import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    // console.log(product)
    const {id, name, username, email, address} = product;
    return (
        <div className='product-section'>
            <h2>Name : {name}</h2>
            <h3>User Name : <Link to={`/product/${id}`}>{username}</Link></h3>
            <p>Email : {email}</p>
            <p>Address : {address.city}</p>
        </div>
    );
};

export default Product;