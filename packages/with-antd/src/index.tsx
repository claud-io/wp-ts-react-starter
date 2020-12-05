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
import { Layout } from './components/Layout';
import './style/index.less';
import useInterceptor from './hooks/useInterceptor';

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
  useInterceptor();

  return (
    <AuthConext.Provider value={authContext}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Layout>
            <PrivateRoute path="/" component={Home} exact />
          </Layout>
        </Switch>
      </Router>
    </AuthConext.Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#app'));
