import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import './App.css';

function App({gry}) {

  const [szukaj, setSzukaj] = useState('');
  const wyszukaneGry = gry.filter((gra) => 
    gra[0].toLowerCase().includes(szukaj.toLowerCase())
  );


  return (
    <>
      <Header/>

      <input 
        type="text" 
        className='wyszukiwarka'
        placeholder='Szukaj gry...' 
        value={szukaj} 
        onChange={(e) => setSzukaj(e.target.value)}
      />


      {wyszukaneGry.map((gra, index) =>(
          <Card key={index} nazwa={gra[0]} opis={gra[1]}/>

      ))}

    </>
  )
}

export default App
