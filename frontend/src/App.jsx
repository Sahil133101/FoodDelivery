import React from 'react';
import Navbar from './components/Navbar/Navbr'; // Ensure the file name and path are correct
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Ensure Home.jsx exists in src/pages/
import Cart from './pages/Cart/Cart'; // Ensure Cart.jsx exists in src/pages/
import Order from './pages/PlaceOrder/PlaceOrder'; // Ensure Order.jsx exists in src/pages/
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <>
  
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
    <Footer/>
      </>
  );
}

export default App;
