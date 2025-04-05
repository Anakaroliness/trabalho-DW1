import React, { useState } from 'react';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
      setErro('Por favor, preencha todos os campos.');
      setSucesso('');
      return;
    }

    if (!email.includes('@')) {
      setErro('Digite um e-mail válido.');
      setSucesso('');
      return;
    }

    // Sucesso
    setErro('');
    setSucesso('Mensagem enviada com sucesso!');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <section id="contato" style={{ padding: '40px', backgroundColor: '#fff8dc' }}>
      <h2 style={{ textAlign: 'center' }}>Fale com a gente 💬</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Mensagem:</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            rows="4"
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffa500',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Enviar
        </button>

        {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}
        {sucesso && <p style={{ color: 'green', marginTop: '10px' }}>{sucesso}</p>}
      </form>
    </section>
  );
}

export default Contato;
