import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { logOut } from '../redux/actions/index';

function Navbar({ loggedIn, logOut }) {
  const reservationsLink = loggedIn
    ? <NavLink to="/reservations">Reservations</NavLink>
    : null;

  const onLogout = () => {
    localStorage.setItem('token', '');
    logOut();
  };

  const accountLinks = loggedIn
    ? <NavLink to="/" onClick={onLogout}>Log out</NavLink>
    : [(
      <NavLink
        key="sign-in-link"
        to="/sign-in"
      >
        Sign In
      </NavLink>
    ), (
      <NavLink
        key="sign-up-link"
        to="/sign-up"
      >
        Sign Up
      </NavLink>
    )];

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="navbar-title">
          Book a Room
        </h1>
      </Link>
      <div className="navbar-list">
        <NavLink
          exact
          to="/"
        >
          Rooms
        </NavLink>
        { reservationsLink }
        { accountLinks }
      </div>
    </div>
  );
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, { logOut })(Navbar);
