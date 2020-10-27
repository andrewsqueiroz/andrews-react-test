import React from 'react';
import './Title.css';

function Title(props) {
    return (
        <div className='row' >
            <div className='col' >
                <h1 className='titulo'>{props.title}</h1>
            </div>
        </div>
    );
}

export default Title;
