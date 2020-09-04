import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Components
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import SideBar from '../components/SideBar';
import ReservationList from './ReservationList';
import RoomList from './RoomList';
import RoomDisplay from './RoomDisplay';

export default function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
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
}
