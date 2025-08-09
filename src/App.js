import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Router from './Router';
import ContactSidebar from './components/ContactSlides/ContactSlides.jsx'; // Import du sidebar
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <ContactSidebar />   {/* Ici, sidebar fixe visible partout */}
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
