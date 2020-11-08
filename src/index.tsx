import ReactDOM from 'react-dom';
import React from 'react';
import useJWT from 'use-jwt-manager';
import { AuthConext } from './contexts';
import { TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants/types';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Login } from './components/Login';
import { Home } from './components/Home';

const refresh: () => Promise<any> = () => {
  console.log(`calling refresh`);
  return new Promise((resolve, reject) => {
    resolve({ access_token: 'new_at1', refresh_token: 'new_rt1' });
  });
};

const me: () => Promise<any> = () => {
  console.log(`calling me`);
  return new Promise((resolve, reject) => {
    resolve({ id: 1, username: 'finto', password: 'finta', role: 'call center' });
  });
};

const login: (user: any) => Promise<any> = (user) => {
  console.log(`calling login for ${user.username}`);
  return new Promise((resolve, reject) => {
    if (user.username == 'finto') {
      resolve({ access_token: 'new_at2', refresh_token: 'new_rt2' });
    }
    reject('nope');
  });
};

const Router: React.FC = ({ children }) => {
  if (__DEV__) {
    return <HashRouter>{children}</HashRouter>;
  } else {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
};

export const Root: React.FC<{}> = ({}) => {
  const config = { TOKEN_KEY, REFRESH_TOKEN_KEY };
  const authContext = useJWT({ login, me, refresh, config });
  console.log(authContext);
  return (
    <AuthConext.Provider value={authContext}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/" component={Home} exact />
        </Switch>
      </Router>
    </AuthConext.Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#app'));
