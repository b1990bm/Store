import React from 'react';
import Store from './Components/Store';
import ProductContextProvaider from './Context/ProductContextProvider';
const App = () => {
  return (
    <ProductContextProvaider>
      <Store />
    </ProductContextProvaider>
  );
};

export default App;