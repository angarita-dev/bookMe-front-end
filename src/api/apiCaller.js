function apiCaller(
  method,
  endpoint = '',
  formData = null,
  onSubmit = () => {},
  onReady = () => {},
  tokenNeeded,
) {
  const newEndpoint = endpoint[0] === '/' ? endpoint : `/${endpoint}`;
  // const requestUrl = `http://181.58.38.50:3001${endpoint}`;
  const requestUrl = `https://book-me-api-angarita-dev.herokuapp.com${newEndpoint}`;
  const token = localStorage.getItem('token');
  const authToken = tokenNeeded ? `Bearer ${token}` : '';

  const req = new XMLHttpRequest();
  req.open(method, requestUrl, true);
  req.onreadystatechange = () => {
    if (req.readyState === 2) {
      onSubmit();
    }
    if (req.readyState === 4) {
      const json = req.response.length ? JSON.parse(req.response) : '';
      onReady(req.status, json);
    }
  };
  if (authToken !== '') req.setRequestHeader('Authorization', authToken);
  req.send(formData);
}

export default apiCaller;
