import React, { useEffect } from 'react';
import './Herolist.css';

import Card from '../Card/Card';
import arrowL from '../../assets/imgs/arrow-left.svg';
import arrowR from '../../assets/imgs/arrow-right.svg';

import filter from '../../assets/imgs/filter.svg';
import arrowD from '../../assets/imgs/arrow-down.svg';

function Herolist(props) {
  const { listaHerois } = props;

  const [heros, setHeros] = React.useState([]);
  const [herosFiltrados, setHerosFiltrados] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [orderby, setOrderby] = React.useState(true);
  
  const handleChangePage = (direction) => {
    //debugger
    let newPage
    if (direction === 'next') {
      if (page + 1 < Math.ceil(herosFiltrados.length / rowsPerPage)) {
        newPage = page + 1
        setPage(newPage)
      }
    } else {
      if (page > 0) {
        newPage = page - 1
        setPage(newPage)
      }
    }
    
  };

  const getCurrentPage = () => {
    return page + 1
  };

  const handleFilterChange = () => event => {
    let textFilter = event.target.value.toUpperCase()
    let filter = heros.filter(x => {
      if (x.codname.toUpperCase().includes(textFilter)) {
          return x
      } else if (x.name.toUpperCase().includes(textFilter)) {
        return x
      } else if (x.descricao.toUpperCase().includes(textFilter)) {
        return x
      } 
      setPage(0)
      return null
    })
    setHerosFiltrados(filter)
  };

  const ordeby = () => {
    let herosOrderby = herosFiltrados.map(x => x)

    function ordebyAz(a, b) {
      const nameA = a.codname.toUpperCase();
      const nameB = b.codname.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    function ordebyZa(a, b) {
      const nameA = a.codname.toUpperCase();
      const nameB = b.codname.toUpperCase();
      let comparison = 0;
      if (nameA < nameB) {
        comparison = 1;
      } else if (nameA > nameB) {
        comparison = -1;
      }
      return comparison;
    }
    
    if (orderby) {
      herosOrderby.sort(ordebyAz);
    } else {
      herosOrderby.sort(ordebyZa);
    }

    setHerosFiltrados(herosOrderby)
    setOrderby(!orderby)
  }; 

  useEffect(() => {
    setHeros(listaHerois)
    setHerosFiltrados(listaHerois)
  }, [listaHerois])
  
  return (
    <>
      <div className='row' >
        <div className='col'>
          <input type='text' onChange={handleFilterChange()} />
          <div className='orderby' onClick={ordeby}><img src={filter} /> A-Z <img src={arrowD} /></div>
        </div>
      </div>
      <div className='row'>
      {
        (rowsPerPage > 0
          ? herosFiltrados.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : herosFiltrados
        ).map((hero) => (
          <Card key={hero.id} hero={hero} />
        ))
      }
      {
        herosFiltrados.length === 0
          ? <div className='col-12 emptList'>Nenhum personagem encontrado.</div>
          : null
      }
      
      </div>
      <div className='row pagination' >
        <div className="btns" onClick={() => handleChangePage('prev')}><img src={arrowL} /></div>
        <div className="numbers">
          <div className="input">{getCurrentPage()}</div>
          de {Math.ceil(herosFiltrados.length / rowsPerPage)}
        </div>
        <div className="btns" onClick={() => handleChangePage('next')}><img src={arrowR} /></div>
      </div>
    </>
  );
}
  
export default Herolist;

