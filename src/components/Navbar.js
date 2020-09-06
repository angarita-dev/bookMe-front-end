import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { logOut } from '../redux/actions/index';

function Navbar({ loggedUser, logOut }) {
  const reservationsLink = loggedUser
    ? <NavLink to="/reservations">Reservations</NavLink>
    : null;

  const accountLinks = loggedUser
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
      <h1 className="navbar-title">
        Book a Room
      </h1>
      <div className="navbar-list">
        <NavLink
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
  loggedUser: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedUser: state.user.token !== undefined && state.user.token.length > 0,
});

export default connect(mapStateToProps, { logOut })(Navbar);
