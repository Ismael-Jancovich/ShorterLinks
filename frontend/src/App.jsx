import React from 'react';
import { AppJs } from './assets/styles/app';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/home';
import Navbar from './assets/components/navbar';
import Footer from './assets/components/footer';
import Login from './assets/pages/login'
import SingUp from './assets/pages/singup'
import Me from './assets/pages/me'
import Galery from './assets/pages/galery'


const App = () => {
  return (
      <>
      <AppJs>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singup" element={<SingUp />} />
              <Route path="/me" element={<Me />} />
              <Route path="/galery" element={<Galery />} />
            </Routes>
          </Router>
            <Footer/>
          </AppJs>
      </>
  );
}

export default App;
