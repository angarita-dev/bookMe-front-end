import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { removeErrors } from '../redux/actions/index';

const ErrorDisplay = ({ errors, removeErrors }) => {
  if (!errors.length) return null;

  const handleClose = () => {
    removeErrors();
  };

  const errorList = errors.map(error => (
    <li key={`error-msg-${error}`}>{ error }</li>
  ));

  const errorTitle = errors.length > 1
    ? 'Errors:'
    : 'Error:';

  return (
    <div className="error-display-container">
      <h2 className="error-title">{errorTitle}</h2>
      <ul className="error-list">
        {errorList}
      </ul>
      <span
        role="button"
        tabIndex={0}
        className="material-icons icon"
        onClick={handleClose}
        onKeyPress={handleClose}
      >
        highlight_off
      </span>
    </div>
  );
};

ErrorDisplay.propTypes = {
  errors: PropTypes.array.isRequired,
  removeErrors: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { removeErrors })(ErrorDisplay);
