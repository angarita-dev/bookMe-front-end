import apiCaller from './apiCaller';

const login = (email, password, setUser, onResponse, onSuccess) => {
  const formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);

  const response = (status, json) => {
    onResponse();
    if (status === 200) {
      const loggedIn = json.token !== undefined && json.token.length > 0;
      setUser(json, loggedIn);
      onSuccess();
      localStorage.setItem('token', json.token);
    }
  };

  apiCaller('POST', '/users/login', formData, () => {}, response);
};

export default login;
