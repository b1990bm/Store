import React,{useContext} from 'react';
import { productsContext } from '../Context/ProductContextProvider';
import {Link} from 'react-router-dom';

const Productdetails = (props) => {
   const id=props.match.params.id; 
   const data=useContext(productsContext);
   const product=data[id - 1];
   const {image,title,description,price,category}=product;
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
            </div>
            <div>
                <span>{price}</span>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    );
};

export default Productdetails;