import './App.css';
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
        setFeriados(data.data); 
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
      <Buscador feriados={feriados} /> 
    </div>
  );
}

export default App;


