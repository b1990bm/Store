import React,{useContext} from 'react';
import { productsContext } from '../Context/ProductContextProvider';
import {Link,useParams} from 'react-router-dom';
import styles from "./ProductDetails.module.css";
const Productdetails = (props) => {
    const params=useParams();
   const id=params.id; 
   const data=useContext(productsContext);
   const product=data[id - 1];
   const {image,title,description,price,category}=product;
    return (
        <div style={styles.container}>
            <img style={styles.image} src={image} alt="product" />
            <div style={styles.textContainer}>
                <h3>{title}</h3>
                <p style={styles.description}>{description}</p>
                <p style={styles.category}>{category}</p>
            </div>
            <div style={styles.buttonContainer}>
                <span style={styles.price}>{price}</span>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    );
};

export default Productdetails;