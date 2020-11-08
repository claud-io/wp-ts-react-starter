import React, { useContext } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { AuthConext } from '../contexts';

export interface RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string | string[];
  exact?: boolean;
}

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  if (!Component) return null;
  const { authenticated } = useContext(AuthConext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
