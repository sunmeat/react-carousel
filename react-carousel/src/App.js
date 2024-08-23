import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Categories from './components/categories';
import Promotions from './components/promotions';
import Contacts from './components/contacts';
import NotFound from './components/page404';
import 'bootstrap/dist/css/bootstrap.min.css'; // !!!!!!!!!!!!

const App = () => (
  <Router>
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />  {}
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;