import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import Router from './Router';
import './App.css'
const App = () => {
  return (
    <BrowserRouter> {/* Entoure tout ton code avec BrowserRouter */}
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;