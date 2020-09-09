import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { setUser, addError } from '../redux/actions/index';

// Reusable components
import SubmitButton from './SubmitButton';

// Api caller
import signUp from '../api/signUp';

function SignUp({ setUser, loggedIn, addError }) {
  const useInput = ({ type, onChange, minLength = 0 }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        value={value}
        onChange={e => {
          setValue(e.target.value);
          if (onChange !== undefined) onChange(e);
        }}
        type={type}
        minLength={minLength}
        required
      />
    );
    return [value, input];
  };

  const [waitingSignUp, setWaitingSignUp] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [name, nameInput] = useInput({ type: 'text' });
  const [email, emailInput] = useInput({ type: 'email' });
  const [password, passwordInput] = useInput({ type: 'password', minLength: 6 });

  const checkConfirmation = e => {
    if (password !== e.target.value) {
      e.target.setCustomValidity("Passwords don't match");
    } else {
      e.target.setCustomValidity('');
    }
  };

  const [passwordConfirmation, passwordConfirmationInput] = useInput(
    { type: 'password', onChange: checkConfirmation },
  );

  const validate = () => {
    let isValid = true;
    if (!/[^@]+@[^@]+\.[a-zA-Z]{2,6}/.test(email)) {
      addError('Please introduce a valid email');
      isValid = false;
    }
    if (password.length < 6) {
      addError('Please enter a password at least 6 characters long');
      isValid = false;
    }
    if (password !== passwordConfirmation) {
      addError('Password and password confirmation don\'t match');
      isValid = false;
    }
    return isValid;
  };

  const onSubmit = () => {
    if (!validate() || waitingSignUp) return;

    setWaitingSignUp(true);

    const params = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    const onReady = json => {
      const loggedIn = json.token !== undefined && json.token.length > 0;
      setUser(json, loggedIn);

      setWaitingSignUp(false);
      setRedirect(true);
    };

    const onError = error => {
      addError(error);
      setWaitingSignUp(false);
    };

    signUp({
      onReady,
      onError,
      params,
    });
  };

  if (loggedIn || redirect) return <Redirect to="/" />;

  return (
    <div className="user-form large">
      <h1>Sign Up</h1>
      <div className="display-container">
        <div className="field">
          <h2>Name:</h2>
          {nameInput}
        </div>
        <div className="field">
          <h2>Email:</h2>
          {emailInput}
        </div>
        <div className="field">
          <h2>Password:</h2>
          {passwordInput}
        </div>
        <div className="field">
          <h2>Password confirmation:</h2>
          {passwordConfirmationInput}
        </div>
        <SubmitButton handleSubmit={onSubmit} />
        <div className="link-container">
          <p>
            Already have an account?
            {' '}
            <NavLink to="/sign-in">Sign In</NavLink>
            {' '}
            instead.
          </p>
        </div>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  setUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  addError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, { setUser, addError })(SignUp);
