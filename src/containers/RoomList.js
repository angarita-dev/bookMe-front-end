import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Room from '../components/Room';

const RoomList = ({ rooms }) => {
  const roomElements = rooms.map(room => (
    <Room
      key={room.id}
      id={room.id}
      title={room.name}
      capacity={room.capacity}
      privateRoom={room.private}
      amenities={room.amenities}
      imgUrl={room.img_url}
    />
  ));

  return (
    <div className="room-list">
      { roomElements }
    </div>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});

export default connect(mapStateToProps)(RoomList);
