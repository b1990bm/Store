import React, { useState,useEffect,createContext } from 'react';

// Api
import { getProducts } from '../Services/Api';

export const productsContext=createContext();

const ProductContextProvaider = ({children}) => {
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchAPI=async()=>{
            setProducts(await getProducts());
        }

        fetchAPI ();


    },[]);
    
    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductContextProvaider;