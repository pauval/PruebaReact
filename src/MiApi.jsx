import React, { useState, useEffect } from 'react';
import './MiApi.css'; 

function MiApi() {
  const [feriados, setFeriados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.boostr.cl/feriados/en.json');
        const data = await response.json();
        console.log('Data from API:', data);
        setFeriados(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (!Array.isArray(feriados)) {
    console.error('Error: los datos de feriados no son un array:', feriados);
    return null;
  }

  return (
    <div>
      <h2>Feriados</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Inalienable</th>
            <th>Extra</th>
          </tr>
        </thead>
        <tbody>
          {feriados.map((feriado, index) => (
            <tr key={index}>
              <td>{feriado.title}</td>
              <td>{feriado.date}</td>
              <td>{feriado.type}</td>
              <td>{feriado.inalienable ? 'Sí' : 'No'}</td>
              <td>{feriado.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;

