import React,{useContext} from 'react';
import Cart from "./Cart"
import { CartContext } from '../../Context/CartContextProvider';    
import styles from "./ShopCart.module.css"
const ShopCart = () => {
    const {state,dispatch}=useContext(CartContext)
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
           {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
           </div>
           {
               state.itemsCounter > 0 && <div className={styles.payment}>
                   <p><span>Total Items:</span>{state.itemsCounter}</p>
                   <p><span>Total Payments:</span>{state.total}</p>
                   <div className={styles.buttonContainer}>
                       <button onClick={()=>dispatch({type:"CHECKOUT"})} className={styles.clear}>Check Out</button>
                       <button onClick={()=>dispatch({type:"CLEAR"})}  className={styles.checkout}>Clear</button>
                   </div>
               </div>
           }
           {state.checkout && <div className={styles.complete}>
               <h3>Check Out Success</h3> 
               </div>
            }
           
        </div>
    );
};

export default ShopCart;