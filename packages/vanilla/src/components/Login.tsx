import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthConext } from '../contexts';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const history = useHistory();
  const authContext = useContext(AuthConext);
  const { authenticated } = authContext;
  React.useEffect(() => {
    console.info('authenticated changed to', authenticated);
    authenticated && history.push('/');
  }, [authenticated]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px',
      }}
    >
      <div>
        <div>login</div>
        <button onClick={() => authContext.login({ username: 'finto', password: 'finto' })}>login</button>
      </div>
      <div>{JSON.stringify(authContext)}</div>
    </div>
  );
};
