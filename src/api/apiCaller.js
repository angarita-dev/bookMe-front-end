const processResponse = (response, onSubmit) => {
  onSubmit();
  return new Promise((resolve, reject) => {
    const func = response.status < 400
      ? resolve
      : reject;

    if (response.status === 204) return resolve({ json: {}, status: 204 });

    return response.json()
      .then(data => {
        func({ status: response.status, meta: resolve, json: data });
      });
  });
};

function apiCaller({
  method,
  endpoint = '/',
  params = {},
  onSubmit = () => {},
  onReady = () => {},
  onError = () => {},
  tokenNeeded,
}) {
  const baseUrl = 'https://book-me-api-angarita-dev.herokuapp.com';
  const requestUrl = new URL(endpoint, baseUrl);
  requestUrl.search = new URLSearchParams(params).toString();

  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Content-Type', 'application/json');
  if (tokenNeeded) {
    const token = localStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
  }

  const options = {
    method,
    headers,
    mode: 'cors',
    cache: 'default',
  };

  fetch(requestUrl, options)
    .then(response => processResponse(response, onSubmit))
    .then(({ json, status }) => {
      onReady(status, json);
    })
    .catch(json => {
      let { error } = json;
      if (error === undefined) error = 'Unexpected error';
      onError(error);
      return false;
    });
}

export default apiCaller;
