import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Room from '../components/Room';
import CreateReservation from '../components/CreateReservation';
import ReservationList from './ReservationList';

export default function RoomDisplay() {
  let { id } = useParams();
  id = parseInt(id, 0);
  return (
    <div className="room-display">
      <Room roomID={id} />
      <ReservationList roomID={id} />
      <CreateReservation roomID={id} />
    </div>
  );
}
