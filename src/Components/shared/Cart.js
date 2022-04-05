import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContextProvider';
import { shorten } from '../Helper/function';
import trash from "../../Icon/trash.svg";
import styles from "./Cart.module.css"
const Cart = (props) => {
    const {image,price,quantity,title}=props.data
    const {dispatch}=useContext(CartContext)
    return (
        <div className={styles.container}>
            <img src={image} alt="product" className={styles.productImg}/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button> :
                    <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}><img src={trash} alt="trash" style={{width:"20px"}} /></button>
                }
                <button onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>

            </div>
        </div>
    );
};

export default Cart;