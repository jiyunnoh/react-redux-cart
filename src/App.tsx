import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

type showCartReducerType = {
  ui: { cartIsVisible: boolean }
}

function App() {
  const showCart = useSelector((state: showCartReducerType) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
