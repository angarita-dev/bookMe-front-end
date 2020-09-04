import React from 'react';
import PropTypes from 'prop-types';

export default function ReservationRow(props) {
  const { id, from, to } = props;

  const fromDate = new Date(from).toLocaleString();
  const toDate = new Date(to).toLocaleString();

  const deleteReservation = () => {
    console.log('Should delete');
  };

  const deleteIcon = (
    <span
      className="material-icons"
      onClick={deleteReservation}
      onKeyDown={deleteReservation}
      tabIndex={0}
      role="button"
    >
      delete
    </span>
  );

  return (
    <tr>
      <th>{fromDate}</th>
      <th>{toDate}</th>
      <th>{deleteIcon}</th>
    </tr>
  );
}

ReservationRow.propTypes = {
  id: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
