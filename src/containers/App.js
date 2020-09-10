import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  setRooms, setUser, setReservations, addError,
} from '../redux/actions/index';

// Components
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Navbar from '../components/Navbar';
import ErrorDisplay from '../components/ErrorDisplay';
import ReservationList from './ReservationList';
import RoomList from './RoomList';
import RoomDisplay from './RoomDisplay';

// Api caller
import queryRooms from '../api/queryRooms';
import queryReservations from '../api/queryReservations';

const App = ({
  setRooms, setUser, setReservations, addError,
}) => {
  useEffect(() => {
    const onReady = json => {
      setRooms(json);
    };

    queryRooms(onReady);
    const token = localStorage.getItem('token');
    if (token !== null && token.length > 0) {
      setUser({}, true);

      queryReservations({
        addError,
        setReservations,
      });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ErrorDisplay />
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
  setUser: PropTypes.func.isRequired,
  setReservations: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
};

export default connect(() => ({}), {
  setRooms, setUser, setReservations, addError,
})(App);
