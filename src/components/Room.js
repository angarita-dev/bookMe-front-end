import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Room = props => {
  const {
    roomID, title, imgUrl, capacity, privateRoom, amenities, loggedIn,
  } = props;

  const imageStyle = { backgroundImage: `url(${imgUrl}` };

  const image = imgUrl.length
    ? <div className="image-container" style={imageStyle} />
    : null;

  const privateIcon = privateRoom
    ? <span className="material-icons">lock</span>
    : <span className="material-icons">lock_open</span>;

  const capacityIcon = capacity > 1
    ? <span className="material-icons">group</span>
    : <span className="material-icons">person</span>;

  const privateText = privateRoom
    ? <span className="private-text">private</span>
    : <span className="private-text">public</span>;

  const capacityText = <span className="capacity-text">{capacity}</span>;

  const amenityItems = amenities.map(amenity => (
    <li className="amenity" key={`amenity-${amenity}`}>
      { amenity }
    </li>
  ));

  const amenityList = <ul className="amenity-list">{amenityItems}</ul>;

  const amenitiesComponent = amenities.length
    ? (
      <div className="amenities-container">
        <h4 className="amenity-title">Amenities</h4>
        {amenityList}
      </div>
    )
    : null;

  const createReservationLink = loggedIn
    ? <Link to={`/room/${roomID}`} className="reserve-link">Reserve room.</Link>
    : <Link to="/sign-in" className="reserve-link">Sign in to reserve.</Link>;

  return (
    <div className="room">
      { image }
      <div className="info-container">
        <div className="info-top">
          <div className="info-header">
            <Link to={`/room/${roomID}`}>
              <h3 className="room-title">{ title }</h3>
            </Link>
            <div className="icons-container">
              <div className="capacity icon-display">
                { capacityIcon }
                { capacityText }
              </div>
              <div className="private icon-display">
                { privateIcon }
                { privateText }
              </div>
            </div>
          </div>
          <div className="info-body">
            {amenitiesComponent}
          </div>
        </div>
        { createReservationLink }
      </div>
    </div>
  );
};

Room.defaultProps = {
  amenities: [],
  imgUrl: '',
};

Room.propTypes = {
  roomID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  privateRoom: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string,
  amenities: PropTypes.array,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(Room);
