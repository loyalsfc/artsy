import { useState } from 'react'
import Home from './pages/home/Home'
import { ContextProvider } from './Context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/productpage/ProductPage';
import Header from './components/header/Header';
import ProductItem from './pages/ProductItemPage/ProductItem';
import Cart from './pages/cart/Cart';
import CartShippingDetails from './pages/cart/CartShippingDetails';
import PaymentCheckout from './pages/cart/PaymentCheckout';
import Confirmation from './pages/confirmpage/Confirmation';

function App() {

  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marketplace' element={<ProductPage />} />
          <Route path='/marketplace/:productId' element={<ProductItem />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shipping-details' element={<CartShippingDetails />} />
          <Route path='/checkout' element={<PaymentCheckout />} />
          <Route path='/checkout-success' element={<Confirmation />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
