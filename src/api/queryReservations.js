import apiCaller from './apiCaller';

const queryReservations = (setReservations, token) => {
  const response = (status, json) => {
    if (status === 200) {
      setReservations(json);
    } else {
      console.log('error');
    }
  };

  apiCaller('GET', '/reservations', null, () => {}, response, token);
};

export default queryReservations;
