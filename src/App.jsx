import { useState } from 'react'
import Home from './pages/home/Home'
import { ContextProvider } from './Context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/productpage/ProductPage';
import Header from './components/header/Header';
import ProductItem from './pages/ProductItemPage/ProductItem';

function App() {

  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marketplace' element={<ProductPage />} />
          <Route path='/marketplace/:productId' element={<ProductItem />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
