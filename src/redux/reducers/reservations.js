import {
  SET_RESERVATIONS, ADD_RESERVATION, DELETE_RESERVATION,
} from '../actions/index';

export default function reservations(state = {}, action) {
  switch (action.type) {
    case SET_RESERVATIONS: {
      let reservations = action.reservations.map(reservation => {
        const {
          id, start_time, end_time, room,
        } = reservation;
        const roomID = room.id;
        return {
          id, start_time, end_time, roomID,
        };
      });

      const reducer = (accumulator, current) => {
        accumulator[current.roomID] = [...accumulator[current.roomID] || [], current];
        return accumulator;
      };

      reservations = reservations.reduce(reducer, {});

      return reservations;
    }
    case ADD_RESERVATION: {
      const { roomID } = action;
      const newState = state;

      let currentReservations = newState[roomID];
      if (currentReservations === undefined) currentReservations = [];

      newState[roomID] = [...currentReservations, action.reservation];

      return newState;
    }
    case DELETE_RESERVATION: {
      const { roomID, reservationID } = action;

      const newState = state;

      const newReservations = newState[roomID].filter(
        reservation => reservation.id !== reservationID,
      );

      newState[roomID] = newReservations;

      return newState;
    }
    default:
      return state;
  }
}
