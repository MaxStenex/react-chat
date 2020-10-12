import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../api';
import logo from '../../assets/header/logo.svg';
import './Header.scss';

const Header = ({ user }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <Link to={user ? '/chat' : '/login'} className='header__logo'>
            <img src={logo} alt='logo' />
          </Link>
          <div className='header__log-panel'>
            {user ? (
              <button
                className='header__log-out'
                onClick={() => {
                  auth.signOut();
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to='/login' className='header__log-in'>
                  Log in
                </Link>
                <Link to='/signup' className='header__sign-up'>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
