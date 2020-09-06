import apiCaller from './apiCaller';

const login = (email, password, setUser, onResponse, onSuccess) => {
  const formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);

  const response = (status, json) => {
    onResponse();
    if (status === 200) {
      setUser(json);
      onSuccess(json.token);
    } else {
      console.log('error');
    }
  };

  apiCaller('POST', '/users/login', formData, () => {}, response);
};

export default login;
