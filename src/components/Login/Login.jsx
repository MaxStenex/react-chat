import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <section className='login'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Member login</h2>
        <form action='#' className='login__form'>
          <div className='login__login'>
            <img src='img/login/login.svg' alt='login' />
            <input type='text' placeholder='login' />
          </div>
          <div className='login__password'>
            <img src='img/login/password.svg' alt='password' />
            <input type='password' placeholder='*****' />
          </div>
          <button className='login__join-btn'>Log in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
