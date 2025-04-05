import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Servicos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
