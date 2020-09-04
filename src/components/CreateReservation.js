import React, { useState } from 'react';
import DateTime from 'react-datetime';

// Reusable component
import SubmitButton from './SubmitButton';

export default function CreateReservation() {
  const useDate = () => {
    const [value, setValue] = useState('');

    const valid = function (current) {
      return current.isAfter(DateTime.moment());
    };

    const handleChange = currentValue => { setValue(currentValue.toISOString()); };

    const date = (
      <DateTime
        onChange={handleChange}
        isValidDate={valid}
      />
    );

    return [value, date];
  };

  const [fromDate, fromDateElement] = useDate();
  const [toDate, toDateElement] = useDate();

  const onSubmitClick = () => {
    console.log(`fromDate: ${fromDate}, toDate: ${toDate}`);
  };

  return (
    <div className="create-reservation" id="create-reservation">
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
      <SubmitButton handleSubmit={onSubmitClick} buttonText="Reserve" />
    </div>
  );
}
