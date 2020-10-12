import React, { useState } from 'react';
import './Signup.scss';
import loginImage from '../../assets/common/login.svg';
import passImage from '../../assets/common/password.svg';
import { useForm } from 'react-hook-form';
import { auth } from '../../api/';
import { Redirect } from 'react-router-dom';

const Signup = ({ user }) => {
  const { register, handleSubmit, errors } = useForm();
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const signupWithEmail = async (data) => {
    if (data.password !== data.confirmPassword) {
      return setConfirmPasswordError(true);
    }
    setConfirmPasswordError(false);
    try {
      await auth.createUserWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      return setRegistrationError(error.message);
    }
  };

  return user ? (
    <Redirect to='/chat' />
  ) : (
    <section className='signup'>
      <div className='signup__wrapper'>
        <h2 className='signup__title'>Registration</h2>
        <form onSubmit={handleSubmit(signupWithEmail)} className='signup__form'>
          <div className='signup__email'>
            <img src={loginImage} alt='email' />
            <input
              name='email'
              type='email'
              placeholder='Email'
              ref={register({ required: true })}
            />
          </div>
          {errors.email && (
            <span className='signup__error'>This field is required</span>
          )}
          <div className='signup__password'>
            <img src={passImage} alt='password' />
            <input
              name='password'
              type='password'
              placeholder='Password'
              ref={register({ required: true, minLength: 6 })}
            />
          </div>
          {errors.password &&
            (errors.required ? (
              <span className='signup__error'>This field is required</span>
            ) : (
              <span className='signup__error'>Min length is 6 symbols</span>
            ))}
          <div className='signup__password signup__password--confirm'>
            <img src={passImage} alt='password' />
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm password'
              ref={register({
                required: true,
              })}
            />
          </div>
          {(errors.confirmPassword && (
            <span className='signup__error'>This field is required</span>
          )) ||
            (confirmPasswordError && (
              <span className='signup__error'>Not equal passwords</span>
            ))}
          <button className='signup__join-btn'>Sign up</button>
        </form>
        {registrationError && (
          <span className='signup__registration-error'>
            {registrationError}
          </span>
        )}
      </div>
    </section>
  );
};

export default Signup;
