import { SET_ROOMS, SET_ROOM } from '../actions/index';

export default function rooms(state = [], action) {
  switch (action.type) {
    case SET_ROOMS:
      return action.rooms;
    case SET_ROOM: {
      const newRoom = action.room;
      return state.map(room => (
        room.id === newRoom.id ? newRoom : room
      ));
    }
    default:
      return state;
  }
}
