
import './Buscador.css'; // Archivo de estilos CSS para Buscador
import React, { useState } from 'react';

function Buscador({ feriados }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = feriados.filter(feriado => {
      return (
        feriado.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feriado.date.includes(searchTerm) ||
        feriado.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (feriado.extra && feriado.extra.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Ordenar los resultados por fecha
    const sortedResults = filteredResults.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

    setSearchResults(sortedResults);
  };

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      <button onClick={handleSearch}>Buscar</button>
      <h2>Resultados de la búsqueda:</h2>
      <ul>
        {searchResults.map((feriado, index) => (
          <li key={index}>
            <strong>Título:</strong> {feriado.title}<br />
            <strong>Fecha:</strong> {feriado.date}<br />
            <strong>Tipo:</strong> {feriado.type}<br />
            <strong>Inalienable:</strong> {feriado.inalienable ? 'Sí' : 'No'}<br />
            {feriado.extra && <strong>Extra:</strong>} {feriado.extra}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Buscador;
