import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton(props) {
  const { handleSubmit, buttonText } = props;
  return (
    <div
      role="button"
      className="submit-button"
      onClick={handleSubmit}
      onKeyDown={handleSubmit}
      tabIndex={0}
    >
      {buttonText}
    </div>
  );
}

SubmitButton.defaultProps = {
  buttonText: 'Submit',
};

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};
