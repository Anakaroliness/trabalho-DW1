import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <h2>Bem-vindo à PetMimos 🐶🐱</h2>
      <p>
        Cuidamos do seu pet com carinho e responsabilidade enquanto você viaja ou trabalha!
      </p>
      <img
        src="/cachorroegato.png"
        alt="Cachorro e gato juntos"
      />
    </section>
  );
}

export default Home;
