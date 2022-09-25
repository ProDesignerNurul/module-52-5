import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {name, price, ratings, img, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="Images Loading, Please Wait A Moment" />
            <div className='product-info'>
            <p className='product-name'>Name : {name}</p>
            <p>Price : {price}</p>
            <p><small>Seller {seller}</small></p>
            <p>Ratings : {ratings} Stars</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;