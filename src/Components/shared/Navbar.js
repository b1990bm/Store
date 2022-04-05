import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../Context/CartContextProvider';

// Icons
import shopIcon from "../../Icon/shop.svg";
import styles from "./Navbar.module.css"
const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart"><img src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;