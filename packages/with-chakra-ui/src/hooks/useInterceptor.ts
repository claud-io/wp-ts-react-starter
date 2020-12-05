import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import{ AuthConext } from '../contexts';

const useInterceptor = (): void => {
  const context = useContext(AuthConext);
  const history = useHistory();
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response , 
      (error) => {
        const { status } = error.response;
        if (status == 401) {
          if (context.refresh_token) {
            //@ts-ignore 
            context.refresh();
          } else {
            //@ts-ignore 
            context.logout().then(
              ()=> history.push('/login')
            )
           
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);
};

export default useInterceptor;
