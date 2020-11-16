import ReactDOM from 'react-dom';
import React from 'react';
import useJWT from 'use-jwt-manager';
import { AuthConext } from './contexts';
import { TOKEN_KEY, REFRESH_TOKEN_KEY, DEVMODE } from './constants/types';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { login, me, refresh } from './api';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import './style/index.less';
import { overrides } from './style/theme';

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
    <ChakraProvider theme={overrides}>
      <AuthConext.Provider value={authContext}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/login" component={Login} exact />
              <PrivateRoute path="/" component={Home} exact />
            </Switch>
          </Layout>
        </Router>
      </AuthConext.Provider>
    </ChakraProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#app'));
