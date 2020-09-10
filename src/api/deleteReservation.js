import apiCaller from './apiCaller';

const queryDeleteReservation = (deleteReservation, id, roomID) => {
  const response = status => {
    if (status === 204) {
      const reservation = { id, roomID };
      deleteReservation(reservation);
    }
  };

  apiCaller({
    method: 'DELETE',
    endpoint: `/reservations/${id}`,
    onReady: response,
    tokenNeeded: true,
  });
};

export default queryDeleteReservation;
