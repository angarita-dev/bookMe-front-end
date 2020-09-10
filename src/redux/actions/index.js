export const SET_ROOMS = 'SET_ROOMS';
export const SET_ROOM = 'SET_ROOM';
export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const SET_RESERVATIONS = 'SET_RESERVATIONS';
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

// Error actions

export const addError = error => ({
  type: ADD_ERROR,
  error,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

// Reservations actions

export const setReservations = reservations => ({
  type: SET_RESERVATIONS,
  reservations: reservations.reservations,
});

export const addReservation = reservation => ({
  type: ADD_RESERVATION,
  reservation: reservation.reservation,
  roomID: reservation.reservation.room.id,
});

export const deleteReservation = reservation => ({
  type: DELETE_RESERVATION,
  roomID: reservation.roomID,
  reservationID: reservation.id,
});

// Rooms actions

export const setRooms = result => ({
  type: SET_ROOMS,
  rooms: result.rooms,
});

export const setRoom = room => ({
  type: SET_ROOM,
  room,
});

// User actions

export const setUser = (user, loggedIn) => ({
  type: SET_USER,
  result: { user, loggedIn },
});

export const logOut = () => ({
  type: LOG_OUT,
});
