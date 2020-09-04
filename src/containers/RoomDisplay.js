import React from 'react';

// Components
import Room from '../components/Room';
import CreateReservation from '../components/CreateReservation';
import ReservationList from './ReservationList';

export default function RoomDisplay() {
  return (
    <div className="room-display">
      <Room />
      <ReservationList />
      <CreateReservation />
    </div>
  );
}
