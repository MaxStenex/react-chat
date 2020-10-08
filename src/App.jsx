import React from 'react';
import './App.scss';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import './normalize.scss';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default App;
