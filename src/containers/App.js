import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { setRooms } from '../redux/actions/index';

// Components
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Navbar from '../components/Navbar';
import ReservationList from './ReservationList';
import RoomList from './RoomList';
import RoomDisplay from './RoomDisplay';

// Api caller
import queryRooms from '../api/queryRooms';

const App = ({ setRooms }) => {
  useEffect(() => {
    queryRooms(setRooms);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/reservations">
            <ReservationList />
          </Route>
          <Route path="/room/:id">
            <RoomDisplay />
          </Route>
          <Route path="/">
            <RoomList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  setRooms: PropTypes.func.isRequired,
};

export default connect(() => ({}), { setRooms })(App);
