import Home from './pages/home/Home'
import { ContextProvider } from './Context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import ProductPage from './pages/marketplace/Marketplace';
import Header from './components/header/Header';
import ProductItem from './pages/ProductItemPage/ProductItem';
import Cart from './pages/cart/Cart';
import CartShippingDetails from './pages/cart/CartShippingDetails';
import PaymentCheckout from './pages/cart/PaymentCheckout';
import Confirmation from './pages/confirmpage/Confirmation';
import Auctions from './pages/auctions/Auctions';
import Livebid from './pages/livebid/Livebid';
import Drop from './pages/drop/Drop';

function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marketplace' element={<ProductPage />} />
          <Route path='/marketplace/:productId' element={<ProductItem />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shipping-details' element={<CartShippingDetails />} />
          <Route path='/checkout' element={<PaymentCheckout />} />
          <Route path='/checkout-success' element={<Confirmation />} />
          <Route path='/auctions' element={<Auctions />} />
          <Route path='/live-bid/:productId' element={<Livebid />} />
          <Route path='/drop' element={<Drop />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
