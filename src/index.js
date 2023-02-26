import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="bg-gradient">
        <React.StrictMode>
            <Header />
            <Main />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </React.StrictMode>
    </div>
);