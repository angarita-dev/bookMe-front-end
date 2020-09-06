import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import ReservationRow from '../components/ReservationRow';

const ReservationList = ({ reservations, roomID }) => {
  const reservationItems = reservations.map(reservation => (
    <ReservationRow
      key={reservation.id}
      id={reservation.id}
      roomID={roomID}
      from={reservation.start_time}
      to={reservation.end_time}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        { reservationItems }
      </tbody>
    </table>
  );
};

ReservationList.propTypes = {
  reservations: PropTypes.array.isRequired,
  roomID: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { roomID } = ownProps;
  const room = state.rooms.filter(room => room.id === roomID)[0];

  const reservations = room === undefined || room.reservations === undefined
    ? []
    : room.reservations;

  return { reservations };
};

export default connect(mapStateToProps)(ReservationList);
