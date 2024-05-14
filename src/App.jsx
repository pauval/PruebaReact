import './App.css'; // Archivo de estilos CSS para la landing page
import React, { useState, useEffect } from 'react';
import MiApi from './MiApi';
import Buscador from './Buscador';

function App() {
  const [feriados, setFeriados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.boostr.cl/feriados/en.json');
        const data = await response.json();
        setFeriados(data.data); // Modifica para acceder al array dentro del objeto data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App landing-page">
      <h1>Feriados Chile 2024</h1>
      <MiApi />
      <Buscador feriados={feriados} /> {/* Pasa la lista de feriados como una prop */}
    </div>
  );
}

export default App;


