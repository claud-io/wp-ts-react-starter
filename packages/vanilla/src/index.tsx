import ReactDOM from 'react-dom';
import React from 'react';
import useJWT from 'use-jwt-manager';
import { AuthConext } from './contexts';
import { TOKEN_KEY, REFRESH_TOKEN_KEY, DEVMODE } from './constants/types';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { login, me, refresh } from './api';

const Router: React.FC = ({ children }) => {
  if (DEVMODE) {
    return <HashRouter>{children}</HashRouter>;
  } else {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
};

export const Root: React.FC<{}> = ({}) => {
  const config = { TOKEN_KEY, REFRESH_TOKEN_KEY };
  const authContext = useJWT({ login, me, refresh, config });
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
