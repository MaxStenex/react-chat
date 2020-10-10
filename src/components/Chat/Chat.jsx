import React from 'react';
import './Chat.scss';
import userDefaultPhoto from '../../assets/userDefault.png';
import { Redirect } from 'react-router-dom';

const Chat = ({ user }) => {
  return user ? (
    <section className='chat'>
      <div className='container'>
        <div className='chat__wrapper'>
          <div className='chat__messages'>
            <ul className='messages__list'>
              <li className='messages__item messages__item--self'>
                <img src={userDefaultPhoto} alt='' />
                <span>Hello</span>
              </li>
              <li className='messages__item'>
                <img src={userDefaultPhoto} alt='' />
                <span>Hello</span>
              </li>
              <li className='messages__item'>
                <img src={userDefaultPhoto} alt='' />
                <span>Hello</span>
              </li>
            </ul>
          </div>
          <form action='#' className='chat__send-form'>
            <textarea name='' className='chat__send-text'></textarea>
            <button className='chat__send-btn'>Send</button>
          </form>
        </div>
      </div>
    </section>
  ) : (
    <Redirect to='login' />
  );
};

export default Chat;
