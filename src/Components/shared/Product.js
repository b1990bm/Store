import React from 'react';
import { shorten } from '../Helper/function';


const Product = ({productData}) => {
    
    return (
        <div>
            <img src={productData.image} alt="product" style={{width:"200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a></a>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    );
};

export default Product;