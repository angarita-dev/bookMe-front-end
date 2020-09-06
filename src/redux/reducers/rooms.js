import {
  SET_ROOMS, SET_ROOM, SET_RESERVATIONS, ADD_RESERVATION, DELETE_RESERVATION,
} from '../actions/index';

export default function rooms(state = [], action) {
  console.log(action);
  switch (action.type) {
    case SET_ROOMS:
      return action.rooms;
    case SET_ROOM: {
      const newRoom = action.room;
      return state.map(room => (
        room.id === newRoom.id ? newRoom : room
      ));
    }
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

      const newState = state.map(room => {
        const newRoom = room;
        if (reservations[room.id] !== undefined) newRoom.reservations = reservations[room.id];

        return newRoom;
      });
      return newState;
    }
    case ADD_RESERVATION: {
      const { id, start_time, end_time } = action.reservation;
      const reservation = { id, start_time, end_time };

      return state.map(room => {
        const newRoom = room;
        if (newRoom.id === action.roomID) {
          if (newRoom.reservations === undefined) {
            newRoom.reservations = [reservation];
          } else {
            newRoom.reservations = newRoom.reservations.push(reservation);
          }
        }

        return newRoom;
      });
    }
    case DELETE_RESERVATION: {
      console.log(action);
      const { roomID, reservationID } = action;
      const newState = state.map(room => {
        const newRoom = room;
        if (room.id === roomID) {
          newRoom.reservations = newRoom.reservations.filter(reservation => (
            reservation.id !== reservationID
          ));
        }
        return newRoom;
      });
      return newState;
    }
    default:
      return state;
  }
}
