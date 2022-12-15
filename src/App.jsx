import { useState } from 'react'
import Home from './pages/home/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/productpage/ProductPage';
import Header from './components/header/Header';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App
