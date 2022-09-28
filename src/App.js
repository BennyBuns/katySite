import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MediaPage from './pages/MediaPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import Header from './components/HeaderComponent';
import HeaderImg from './components/ImageHeader';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
    return (
        <div className='App'>
            <HeaderImg />
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='media' element={<MediaPage />} />
                <Route path='shop' element={<ShopPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;