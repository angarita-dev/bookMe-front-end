import apiCaller from './apiCaller';

const queryReservations = setReservations => {
  const response = (status, json) => {
    if (status === 200) {
      setReservations(json);
    }
  };

  apiCaller('GET', '/reservations', null, () => {}, response, true);
};

export default queryReservations;
