import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { deleteReservation } from '../redux/actions/index';

// Api caller
import deleteReservationQuery from '../api/deleteReservation';

const ReservationRow = ({
  roomID, id, from, to, deleteReservation,
}) => {
  const fromDate = new Date(from).toLocaleString();
  const toDate = new Date(to).toLocaleString();

  const handleReservationDelete = () => {
    deleteReservationQuery(deleteReservation, id, roomID);
  };

  const deleteIcon = (
    <span
      className="material-icons"
      onClick={handleReservationDelete}
      onKeyDown={handleReservationDelete}
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
};

ReservationRow.propTypes = {
  id: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  roomID: PropTypes.number.isRequired,
  deleteReservation: PropTypes.func.isRequired,
};

export default connect(() => ({}), { deleteReservation })(ReservationRow);
