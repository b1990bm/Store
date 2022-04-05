import React,{useEffect,useState} from 'react';
// import { productsContext } from '../Context/ProductContextProvider';
import {Link,useParams} from 'react-router-dom';
import styles from "./ProductDetails.module.css";
import {BASE_URL} from "../Services/Api"
import axios from "axios"
const Productdetails = (props) => {
    const params=useParams();
   const id=params.id; 
   const [data,setData]=useState({
       product:[]
   })
   useEffect(()=>{
       axios.get(`${BASE_URL}/products/${id}`)
       .then(response=>setData({product:response.data}))



   },[])

   const {image,title,description,price,category}=data.product;
   

//    const data=useContext(productsContext);
//    const product=data[id - 1];
//    const {image,title,description,price,category}=product;
    return (
        <div className={styles.container}>
            <img  className={styles.image}src={image} alt="product" />
            <div className={styles.content}>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>{category}</p>
            </div>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price}</span>
                <Link to="/products">Back to Shop</Link>
            </div>
            </div>
        </div>
    );
};

export default Productdetails;