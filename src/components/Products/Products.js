import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';


const Products = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div>
            <h3> Name : {products.length}</h3>
            {/* {
                products.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
            } */}
            
        </div>
    );
};

export default Products;