import React from 'react';
import './Login.scss';
import loginImage from '../../assets/common/login.svg';
import passImage from '../../assets/common/password.svg';
import googleIcon from '../../assets/login/googleIcon.svg';
import firebase, { auth } from '../../api';
import { Redirect } from 'react-router-dom';

const Login = ({ user }) => {
  const singInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return user ? (
    <Redirect to='/chat' />
  ) : (
    <section className='login'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Member login</h2>
        <form action='#' className='login__form'>
          <div className='login__login'>
            <img src={loginImage} alt='login' />
            <input type='email' placeholder='Email' />
          </div>
          <div className='login__password'>
            <img src={passImage} alt='password' />
            <input type='password' placeholder='Password' />
          </div>
          <button className='login__join-btn'>Log in</button>
        </form>
        <ul className='login-with'>
          <li className='login-with__item'>
            <button className='login-with__button' onClick={singInWithGoogle}>
              <img src={googleIcon} alt='singInWIthGoogle' />
              <span>Sign in with google</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Login;
