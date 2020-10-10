import React from 'react';
import { auth } from './api';
import './App.scss';
import './normalize.scss';
import { Header, Login, Chat } from './components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <React.Fragment>
      <Header user={user} />
      <main>
        <Switch>
          {loading && <div>Loading....</div>}
          <Route path='/login' render={() => <Login user={user} />} />
          <Route path='/chat' render={() => <Chat user={user} />} />
          <Route exact path='/'>
            {user === null ? <Redirect to='/login' /> : <Redirect to='/chat' />}
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
