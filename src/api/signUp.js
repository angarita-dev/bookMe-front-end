import apiCaller from './apiCaller';

export default function signUp({
  params,
  onReady,
  onError,
}) {
  const readyMiddleman = (status, json) => {
    localStorage.setItem('token', json.token);
    onReady(json);
  };

  apiCaller({
    method: 'post',
    endpoint: '/users',
    onReady: readyMiddleman,
    onError,
    params,
  });
}
