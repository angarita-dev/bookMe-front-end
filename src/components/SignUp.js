import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { setUser } from '../redux/actions/index';

// Reusable components
import SubmitButton from './SubmitButton';

// Api caller
import apiCaller from '../api/apiCaller';

function SignUp({ setUser, loggedIn, }) {
  const useInput = ({ type }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };

  const [waitingSignUp, setWaitingSignUp] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [name, nameInput] = useInput({ type: 'text' });
  const [email, emailInput] = useInput({ type: 'email' });
  const [password, passwordInput] = useInput({ type: 'password' });
  const [passwordConfirmation, passwordConfirmationInput] = useInput({ type: 'password' });

  const onSubmit = () => {
    if (waitingSignUp || password !== passwordConfirmation) return;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    const waiting = () => {
      setWaitingSignUp(true);
    };

    const response = (status, json) => {
      setWaitingSignUp(false);
      if (status === 201) {
        setUser(json);
        localStorage.setItem('token', json.token);
        setRedirect(true);
      } else {
        console.log(`error ${json}`);
      }
    };

    apiCaller('POST', '/users', formData, waiting, response);
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
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, { setUser })(SignUp);
