import React from 'react'
import { NavLink } from "react-router-dom";


export default function SideBar(props) {
  const { adminUser } = props

  const reservationsLink = adminUser ?
    <NavLink to='/reservations'>Reservations</NavLink> :
    null;

  return (
    <div className='sidebar'>
      <h1 className='sidebar-title'>
        Book a Room
      </h1>
      <div className='sidebar-list'>
        <NavLink
          to='/'
        >
          Rooms
        </NavLink>
        <NavLink
          to='/signin'
        >
          Sign In  
        </NavLink>
        <NavLink
          to='/signup'
        >
          Sign Up  
        </NavLink>
        { reservationsLink }
      </div>
    </div>
  );
}

SideBar.defaultProps = {
  adminUser: false,
}
