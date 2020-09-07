import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

// Actions
import { setUser, setReservations } from '../redux/actions/index';

// Reusable components
import SubmitButton from './SubmitButton';

// Api caller
import callLogin from '../api/login';
import queryReservations from '../api/queryReservations';

function SignIn({ setUser, setReservations }) {
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

  const [waitingLogIn, setWaitingLogIn] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [email, emailInput] = useInput({ type: 'email' });
  const [password, passwordInput] = useInput({ type: 'password' });

  const onSubmit = () => {
    if (waitingLogIn) return;
    setWaitingLogIn(true);

    const onResponse = () => { setWaitingLogIn(false); };

    const onSuccess = () => {
      setRedirect(true);
      queryReservations(setReservations);
    };

    callLogin(email, password, setUser, onResponse, onSuccess);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="user-form">
      <h1>Sign in</h1>
      <div className="display-container">
        <div className="field">
          <h2>Email:</h2>
          {emailInput}
        </div>
        <div className="field">
          <h2>Password:</h2>
          {passwordInput}
        </div>
        <SubmitButton handleSubmit={onSubmit} />
        <div className="link-container">
          <p>
            Don&apos;t have an account?
            <NavLink to="/sign-up"> Sign Up </NavLink>
            {' '}
            instead.
          </p>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
  setReservations: PropTypes.func.isRequired,
};

export default connect(() => ({}), { setUser, setReservations })(SignIn);
