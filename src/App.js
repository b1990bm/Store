import React from 'react';
import Store from './Components/Store';
import ProductContextProvaider from './Context/ProductContextProvider';
import {Switch,Route,Redirect} from 'react-router-dom';
import Productdetails from './Components/Productdetails';
const App = () => {
  return (
    <ProductContextProvaider>
      <Switch>
      <Route path="/products/:id" component={Productdetails} />
      <Route path="/products" component={Store} />
      <Redirect to="/products" />
      </Switch>
    </ProductContextProvaider>
  );
};

export default App;