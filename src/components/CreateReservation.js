import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { addReservation } from '../redux/actions/index';

// Reusable component
import SubmitButton from './SubmitButton';

// Api caller
import apiCaller from '../api/apiCaller';

const CreateReservation = ({ authToken, roomID, addReservation }) => {
  const useDate = () => {
    const [value, setValue] = useState('');

    const valid = function (current) {
      return current.isAfter(DateTime.moment());
    };

    const handleChange = currentValue => {
      setValue(currentValue.format());
    };

    const date = (
      <DateTime
        onChange={handleChange}
        isValidDate={valid}
      />
    );

    return [value, date];
  };

  const [waitingSubmit, setWaitingSubmit] = useState(false);
  const [fromDate, fromDateElement] = useDate();
  const [toDate, toDateElement] = useDate();

  if (authToken === '') {
    return (
      <div className='create-reservation short'>
        <Link to="/sign-in" className="reserve-link">Sign in to reserve.</Link>
      </div>
    );
  }

  const onSubmitClick = () => {
    if (waitingSubmit) return;

    const formData = new FormData();

    console.log(fromDate);
    formData.append('start_time', fromDate);
    formData.append('end_time', toDate);
    formData.append('room_id', roomID);

    const waiting = () => {
      setWaitingSubmit(true);
    };

    const response = (status, json) => {
      setWaitingSubmit(false);
      if (status === 201) {
        addReservation(json);
      } else {
        console.log(`error ${json}`);
      }
    };

    apiCaller('POST', '/reservations', formData, waiting, response);
  };

  return (
    <div className="create-reservation" id="create-reservation">
      <div className="text-container">
        <h3>Would like to reserve this room?</h3>
        <h4>Choose your time!</h4>
        <div className="input-container">
          <div className="start-datetime">
            <span>From:</span>
            { fromDateElement }
          </div>
          <div className="to-datetime">
            <span>To:</span>
            { toDateElement }
          </div>
        </div>
      </div>
      <SubmitButton handleSubmit={onSubmitClick} buttonText="Reserve" />
    </div>
  );
};

CreateReservation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  roomID: PropTypes.number.isRequired,
  addReservation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(() => ({}), { addReservation })(CreateReservation);
