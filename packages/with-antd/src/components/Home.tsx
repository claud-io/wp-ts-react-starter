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
    <div>
      <div>{JSON.stringify(authContext)}</div>
    </div>
  );
};
