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

  const accountLinks = loggedIn
    ? <NavLink to="/" onClick={logOut}>Log out</NavLink>
    : (
      <div>
        <NavLink
          to="/sign-in"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/sign-up"
        >
          Sign Up
        </NavLink>
      </div>
    );

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
