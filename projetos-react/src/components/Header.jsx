import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>PetMimos 🐾</h1>
      <nav>
        <a href="#home">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
