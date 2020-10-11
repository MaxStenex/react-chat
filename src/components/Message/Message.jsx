import React from 'react';
import './Message.scss';
import userDefaultPhoto from '../../assets/userDefault.png';
import { auth } from '../../api';

const Message = ({ text, uid, photoURL }) => {
  return (
    <li
      className={
        'messages__item ' +
        (auth.currentUser.uid === uid ? 'messages__item--self' : '')
      }
    >
      <img src={photoURL || userDefaultPhoto} alt='' />
      <span>{text}</span>
    </li>
  );
};

export default Message;
