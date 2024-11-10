// src/components/Header/Header.js
import React from 'react';
import WoodenHousingIcon from '../../assets/icons/wooden-house-icon.svg'
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <div className="header" >
    <div className='upper-header'>
      <div className='hd-logo-title'>
      <img src={WoodenHousingIcon} />
      <span className='hd-title-text'>WOODENHOUSING</span>
      <div className='menu-bar'>
          <div className='menu-bar-item'>Home</div>
          <div className='menu-bar-item'>Designs</div>
          <div className='menu-bar-item'>Services</div>
          <div className='menu-bar-item'>About Us</div>
          <div className='menu-bar-item'>Blog</div>
          <div className='menu-bar-item'>Career</div>
      </div>
      </div>
        <div className='button-area'>
            Contact Us
        </div>
    </div>
    <div className='bottom-header'>
      <div className='menu-space'>
      <div className='bottom-each-item'>Why wooden house?</div>
      <div  className='bottom-each-item'>Benefits of wooden house</div>
      <div className='bottom-each-item'>3D design tour</div>
      </div>
    <div className='blank-space' />
    </div>
    </div>
  );
}

export default Header;
