import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbr';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer.jsx';
import LoginPopUP from './components/LoginPop-up/LoginPopUP.jsx';

const App = () => {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopUP setshowLogin={setshowLogin} />}
      <div className='App'>
        <Navbar setshowLogiin={setshowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
