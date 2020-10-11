import React from 'react';
import { auth } from './api';
import './App.scss';
import './normalize.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route, Switch } from 'react-router-dom';

import Preloader from './components/Preloader/Preloader';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    (loading && <Preloader pageloading />) || (
      <React.Fragment>
        <Header user={user} />
        <main>
          <Switch>
            <Route path='/login' render={() => <Login user={user} />} />
            <Route path='/chat' render={() => <Chat user={user} />} />
            <Route exact path='/'>
              {user === null ? (
                <Redirect to='/login' />
              ) : (
                <Redirect to='/chat' />
              )}
            </Route>
          </Switch>
        </main>
      </React.Fragment>
    )
  );
};

export default App;
