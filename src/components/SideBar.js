import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function SideBar(props) {
  const { loggedUser } = props;

  const reservationsLink = loggedUser
    ? <NavLink to="/reservations">Reservations</NavLink>
    : null;

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">
        Book a Room
      </h1>
      <div className="sidebar-list">
        <NavLink
          to="/"
        >
          Rooms
        </NavLink>
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
        { reservationsLink }
      </div>
    </div>
  );
}

SideBar.defaultProps = {
  loggedUser: false,
};

SideBar.propTypes = {
  loggedUser: PropTypes.bool,
};
