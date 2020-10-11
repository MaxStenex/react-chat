import React, { useEffect, useRef } from 'react';
import './Chat.scss';
import { Redirect } from 'react-router-dom';
import { firestore } from '../../api';
import Message from '../Message/Message';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import MessageForm from '../MessageForm/MessageForm';

const Chat = ({ user }) => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData(query, { idField: 'id' });
  const chatScroller = useRef();
  useEffect(() => {
    chatScroller.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return user ? (
    <section className='chat'>
      <div className='container'>
        <div className='chat__wrapper'>
          <div className='chat__messages'>
            <ul className='messages__list'>
              {messages &&
                messages.map((message) => {
                  return (
                    <Message
                      key={message.id}
                      text={message.text}
                      uid={message.uid}
                      photoURL={message.photoURL}
                    />
                  );
                })}
              <li className='chatScroller' ref={chatScroller}></li>
            </ul>
          </div>
          <MessageForm />
        </div>
      </div>
    </section>
  ) : (
    <Redirect to='login' />
  );
};

export default Chat;
