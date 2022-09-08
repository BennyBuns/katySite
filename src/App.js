import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MediaPage from './pages/MediaPage';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='media' element={<MediaPage/>} />
                <Route path='store' element={<StorePage/>} />
                <Route path='about' element={<AboutPage/>} />
                <Route path='contact' element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;