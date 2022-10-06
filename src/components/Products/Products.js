import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='main-section'>
            <h3> Name : {products.length}</h3>
            <div className='products-area'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;