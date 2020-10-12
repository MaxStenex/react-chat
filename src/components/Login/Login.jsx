import React, { useState } from 'react';
import './Login.scss';
import loginImage from '../../assets/common/login.svg';
import passImage from '../../assets/common/password.svg';
import googleIcon from '../../assets/login/googleIcon.svg';
import firebase, { auth } from '../../api';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = ({ user }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loginError, setLoginError] = useState('');
  const singInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const loginWithEmail = async (data) => {
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      return setLoginError(error.message);
    }
  };

  return user ? (
    <Redirect to='/chat' />
  ) : (
    <section className='login'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Member login</h2>
        <form onSubmit={handleSubmit(loginWithEmail)} className='login__form'>
          <div className='login__login'>
            <img src={loginImage} alt='login' />
            <input
              type='email'
              placeholder='Email'
              ref={register({ required: true })}
              name='email'
            />
          </div>
          {errors.email && (
            <span className='login__error'>This field is required</span>
          )}
          <div className='login__password'>
            <img src={passImage} alt='password' />
            <input
              type='password'
              placeholder='Password'
              name='password'
              ref={register({ required: true })}
            />
          </div>
          {errors.password && (
            <span className='login__error'>This field is required</span>
          )}
          <button className='login__join-btn'>Log in</button>
        </form>
        {loginError && (
          <span className='login__error login__error--global'>
            {loginError}
          </span>
        )}
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
