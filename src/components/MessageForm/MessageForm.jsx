import React, { useState } from 'react';
import { auth, firestore } from '../../api';
import Preloader from '../Preloader/Preloader';
import './MessageForm.scss';
import firebase from '../../api';

const MessageForm = () => {
  const [messageText, setMessageText] = useState('');
  const [showPreloader, setShowPreloader] = useState(false);
  const messagesRef = firestore.collection('messages');
  const sendMessage = async (evt) => {
    evt.preventDefault();
    setShowPreloader(true);
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: messageText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessageText('');
    setShowPreloader(false);
  };

  return (
    <form onSubmit={sendMessage} className='chat__send-form'>
      <textarea
        name=''
        className='chat__send-text'
        value={messageText}
        onChange={(evt) => {
          setMessageText(evt.target.value);
        }}
      />
      <button className='chat__send-btn' type='submit' disabled={showPreloader}>
        {showPreloader ? <Preloader /> : 'Send'}
      </button>
    </form>
  );
};

export default MessageForm;
