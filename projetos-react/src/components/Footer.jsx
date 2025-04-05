import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px'
    }}>
      <p>&copy; {new Date().getFullYear()} PetSitter Ana 🐾 | Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
