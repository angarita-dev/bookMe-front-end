import apiCaller from './apiCaller';

const queryReservations = ({ setReservations, addError }) => {
  const response = (status, json) => {
    if (status === 200) {
      setReservations(json);
    }
  };

  const onError = error => { addError(error); };

  apiCaller({
    method: 'GET',
    endpoint: '/reservations',
    onError,
    onReady: response,
    tokenNeeded: true,
  });
};

export default queryReservations;
