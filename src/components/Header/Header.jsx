import React from 'react';
import logo from '../../assets/header/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <a href='/' className='header__logo'>
            <img src={logo} alt='logo' />
          </a>
          <div className='header__log-panel'>
            <a href='#' className='header__log-in'>
              Log in
            </a>
            <a href='#' className='header__sign-up'>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
