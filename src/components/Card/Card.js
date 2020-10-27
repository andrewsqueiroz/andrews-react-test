import React from 'react';
import './Card.css';

function Card(props) {
  const { hero } = props;

    return (
      <div className='col-sm-6 col-md-4 col-lg-3'>
          <div className='card'>
              <div className="imageHero" style={{backgroundImage: `url(${hero.image})`}}></div>
              <div><h3>{hero.codname}</h3></div>
              <div><h4>{hero.name}</h4></div>
              <div className="line"></div>
              <div><p>{hero.descricao}</p></div>
          </div>
      </div>
    );
}
  
export default Card;

