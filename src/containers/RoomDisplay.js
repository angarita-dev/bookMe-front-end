import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Room from '../components/Room';
import CreateReservation from '../components/CreateReservation';
import ReservationList from './ReservationList';

const RoomDisplay = ({ rooms }) => {
  let { id } = useParams();
  id = parseInt(id, 0);

  const room = rooms.filter(room => room.id === id)[0];
  const roomComponent = room === undefined
    ? <Redirect to="/" />
    : (
      <Room
        roomID={room.id}
        title={room.name}
        capacity={room.capacity}
        privateRoom={room.private}
        amenities={room.amenities}
        imgUrl={room.img_url}
      />

    );
  return (
    <div className="room-display">
      { roomComponent }
      <ReservationList roomID={id} />
      <CreateReservation roomID={id} />
    </div>
  );
};

RoomDisplay.propTypes = {
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});

export default connect(mapStateToProps)(RoomDisplay);
