import { React, useState } from 'react' 
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/home'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import StoreContextProvider from './context/StoreContext';


const App = () => {

const [showLogin, setShowLogin]= useState(false)

  return (
    <StoreContextProvider>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        
      </div>
      <Footer/>
    </StoreContextProvider>
  );
}



export default App