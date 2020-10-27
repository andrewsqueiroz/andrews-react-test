import React, { useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Herolist from './components/HeroList/Herolist';

function App() {
  const [heros, setHeros] = React.useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/heros.json`)
    .then(res => res.json())
    .then(res => { 
      setHeros(res)
    })
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <div className='Panel'>
          <Title title='Character' />
          <Herolist listaHerois={heros} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;