import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shopping-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                
                    ></Product>)
                }
            </div>
            <div className="shop-summery-container">
                <h2>pakistan</h2>
            </div>
            
        </div>
    );
};

export default Shop;