import apiCaller from './apiCaller';

const queryDeleteReservation = (deleteReservation, id, roomID, token) => {
  const response = status => {
    if (status === 204) {
      const reservation = { id, roomID };
      deleteReservation(reservation);
    } else {
      console.log('error');
    }
  };

  apiCaller('DELETE', `/reservations/${id}`, null, () => {}, response, token);
};

export default queryDeleteReservation;
