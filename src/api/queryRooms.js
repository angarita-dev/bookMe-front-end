import apiCaller from './apiCaller';

const queryRooms = onReady => {
  const response = (status, json) => {
    if (status === 200) {
      onReady(json);
    }
  };

  apiCaller({
    method: 'GET',
    endpoint: '/rooms',
    onReady: response,
  });
};

export default queryRooms;
