import React, { useContext } from 'react';
import { productsContext } from '../Context/ProductContextProvider';
import Product from './shared/Product';
const Store = () => {
    const products=useContext(productsContext);
    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            {
            products.map(product =><Product 
                                            key={product.id} 
                                            productData={product} 
                                            />)
            }
        </div>
    );
};

export default Store;