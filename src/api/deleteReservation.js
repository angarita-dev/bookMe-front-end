import apiCaller from './apiCaller';

const queryDeleteReservation = (deleteReservation, id, roomID) => {
  const response = status => {
    if (status === 204) {
      const reservation = { id, roomID };
      deleteReservation(reservation);
    }
  };

  apiCaller('DELETE', `/reservations/${id}`, null, () => {}, response, true);
};

export default queryDeleteReservation;
