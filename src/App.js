import React from 'react';
import Store from './Components/Store';
import ProductContextProvaider from './Context/ProductContextProvider';
import {Routes,Route, Navigate} from 'react-router-dom';
import Productdetails from './Components/Productdetails';
import CartContextProvider from './Context/CartContextProvider';
import Navbar from './Components/shared/Navbar';
import ShopCart from "./Components/shared/ShopCart"
import './App.css';
const App = () => {
  return (
    <ProductContextProvaider>
        <CartContextProvider>
          <Navbar />
            <Routes>
            <Route path="/products/:id" element={<Productdetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
            </Routes>
        </CartContextProvider>
    </ProductContextProvaider>
  );
};

export default App;