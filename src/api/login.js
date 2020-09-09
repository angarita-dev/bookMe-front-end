import apiCaller from './apiCaller';

const login = ({
  params,
  setUser,
  onSubmit,
  onReady,
  onError,
}) => {
  const response = (status, json) => {
    onSubmit();
    if (status === 200) {
      const loggedIn = json.token !== undefined && json.token.length > 0;
      localStorage.setItem('token', json.token);
      setUser(json, loggedIn);
      onReady();
    }
  };

  apiCaller({
    method: 'POST',
    endpoint: '/users/login',
    onReady: response,
    onSubmit,
    params,
    onError,
  });
};

export default login;
