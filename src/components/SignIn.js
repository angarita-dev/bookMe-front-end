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

function SignIn({ setUser, setReservations, loggedIn, minLength, }) {
  const useInput = ({ type }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
        minLength={minLength}
        required
      />
    );
    return [value, input];
  };

  const [waitingLogIn, setWaitingLogIn] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [email, emailInput] = useInput({ type: 'email', minLength: 0 });
  const [password, passwordInput] = useInput({ type: 'password', minLength: 6 });

  const validate = () => {
    return (/[^@]+@[^@]+\.[a-zA-Z]{2,6}/.test(email)) && (password.length > 6);
  }

  const onSubmit = () => {
    if (waitingLogIn || !validate()) return;
    setWaitingLogIn(true);

    const onResponse = () => { setWaitingLogIn(false); };

    const onSuccess = () => {
      setRedirect(true);
      queryReservations(setReservations);
    };

    callLogin(email, password, setUser, onResponse, onSuccess);
  };

  if (loggedIn || redirect) return <Redirect to="/" />;

  return (
    <div className="user-form">
      <h1>Sign in</h1>
      <div className="display-container">
        <form>
          <div className="field">
            <h2>Email:</h2>
            {emailInput}
          </div>
          <div className="field">
            <h2>Password:</h2>
            {passwordInput}
          </div>
          <SubmitButton handleSubmit={onSubmit} />
        </form>
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
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, { setUser, setReservations })(SignIn);
