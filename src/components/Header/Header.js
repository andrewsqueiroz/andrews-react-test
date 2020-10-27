import React from 'react';
import './Header.css';
import Logo from '../../assets/imgs/mainLogo.png'

function Header() {
    return (
      <div className="base-header">
        <img className='marvel-logo' src={Logo} alt='Marvel' />
      </div>
    );
}
  
export default Header;