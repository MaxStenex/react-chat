import React, { lazy } from 'react';
import { auth } from './api';
import './App.scss';
import './normalize.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route, Switch } from 'react-router-dom';

import Preloader from './components/Preloader/Preloader';
const Chat = lazy(() => import('./components/Chat/Chat'));
const Login = lazy(() => import('./components/Login/Login'));
const Header = lazy(() => import('./components/Header/Header'));
const Signup = lazy(() => import('./components/Signup/Signup'));

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    (loading && <Preloader pageloading />) || (
      <React.Suspense fallback={<Preloader pageloading />}>
        <Header user={user} />
        <main>
          <Switch>
            <Route path='/login' render={() => <Login user={user} />} />
            <Route path='/chat' render={() => <Chat user={user} />} />
            <Route path='/signup' render={() => <Signup user={user} />} />
            <Route exact path='/'>
              {user === null ? (
                <Redirect to='/login' />
              ) : (
                <Redirect to='/chat' />
              )}
            </Route>
          </Switch>
        </main>
      </React.Suspense>
    )
  );
};

export default App;
