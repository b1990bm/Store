import React, { useState,useEffect,createContext } from 'react';

// Api
import { getProducts } from '../Services/Api';

const productsContext=createContext();

const ProductContextProvaider = (props) => {
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchAPI=async()=>{
            setProducts(await getProducts();)
        }

        fetchAPI ();


    },[]);
    
    return (
        <productsContext.Provider value={products}>
            {props.children}
        </productsContext.Provider>
    );
};

export default ProductContextProvaider;