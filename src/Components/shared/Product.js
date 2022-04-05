import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount } from '../Helper/function';

// Context
import { CartContext } from '../../Context/CartContextProvider';

// Icons
import trashIcon from "../../Icon/trash.svg";

import styles from "../shared/Product.module.css"
const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product"  />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link className={styles.linkContainer} to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button  className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}
                    {quantityCount(state,productData.id) > 0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type:"INCREASE", payload: productData})} className={styles.smallButton} >+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}  >Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;