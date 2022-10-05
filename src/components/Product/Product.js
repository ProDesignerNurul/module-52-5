import React from 'react';

const Product = ({product}) => {
    console.log(product)
    const {strMeal} = product;
    return (
        <div>
            <h2>Product Name : {strMeal}</h2>
        </div>
    );
};

export default Product;