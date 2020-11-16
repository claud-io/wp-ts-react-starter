import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthConext } from '../contexts';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const history = useHistory();
  const authContext = useContext(AuthConext);
  if (!authContext.user || authContext.user === undefined) {
    history.push('/login');
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px',
      }}
    >
      <div>
        <div>Home</div>
        <button onClick={() => authContext.logout()}>logout</button>
      </div>
      <div>{JSON.stringify(authContext)}</div>
    </div>
  );
};
