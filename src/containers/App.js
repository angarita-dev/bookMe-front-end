import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router";


// Components
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import SideBar from '../components/SideBar';
import ReservationList from './ReservationList';
import RoomList from './RoomList';
import Reservation from './Reservation';

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/reservations">
            <ReservationList />
          </Route>
          <Route path="/reservation/:id">
            <Reservation />
          </Route>
          <Route path="/">
            <RoomList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
