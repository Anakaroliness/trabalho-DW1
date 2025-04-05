import React, { useState } from 'react';

function Servicos() {
  const listaOriginal = [
    'Passeio com cães',
    'Hospedagem domiciliar',
    'Visita para gatos',
    'Administração de medicamentos',
    'Banho em casa',
    'Pet táxi'
  ];

  const [busca, setBusca] = useState('');
  const [ordem, setOrdem] = useState('az');

  // Ordena e filtra
  const servicosFiltrados = listaOriginal
    .filter((servico) => servico.toLowerCase().includes(busca.toLowerCase()))
    .sort((a, b) => {
      return ordem === 'az'
        ? a.localeCompare(b)
        : b.localeCompare(a);
    });

  return (
    <section id="servicos" style={{ padding: '40px', backgroundColor: '#f0f8ff' }}>
      <h2 style={{ textAlign: 'center' }}>Nossos Serviços 🐕‍🦺</h2>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Buscar serviço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            padding: '10px',
            width: '80%',
            maxWidth: '300px',
            borderRadius: '10px',
            border: '1px solid #ccc'
          }}
        />

        <div style={{ marginTop: '10px' }}>
          <button
            onClick={() => setOrdem('az')}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: ordem === 'az' ? '#ffa500' : '#ccc',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            A-Z
          </button>

          <button
            onClick={() => setOrdem('za')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: ordem === 'za' ? '#ffa500' : '#ccc',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Z-A
          </button>
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
        {servicosFiltrados.length > 0 ? (
          servicosFiltrados.map((servico, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                margin: '10px auto',
                backgroundColor: '#fff',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              {servico}
            </li>
          ))
        ) : (
          <p>Nenhum serviço encontrado.</p>
        )}
      </ul>
    </section>
  );
}

export default Servicos;

