import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Interceptor: React.FC<{}> = ({}) => {
  // const context = useContext(AuthConext);
  const history = useHistory();
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const { status } = error.response;
        if (status == 401 || status == 403) {
          history.push("/");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return null;
};

export default Interceptor;
