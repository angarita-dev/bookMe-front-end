import React from 'react';
import PropTypes from 'prop-types';

// Components
import ReservationRow from '../components/ReservationRow';

export default function ReservationList(props) {
  const { reservations } = props;

  const reservationItems = reservations.map(reservation => (
    <ReservationRow
      key={reservation.id}
      id={reservation.id}
      from={reservation.from}
      to={reservation.to}
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
}

ReservationList.defaultProps = {
  reservations: [
    {
      id: 1,
      from: '2020-09-04T15:44:08.941Z',
      to: '2020-09-04T17:44:08.941Z',
    },
  ],
};

ReservationList.propTypes = {
  reservations: PropTypes.array,
};
