import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Room(props) {
  const {
    id, title, imgUrl, capacity, privateRoom, amenities, displayReservation,
  } = props;

  const imageStyle = {
    width: '50%',
    backgroundImage: `url(${imgUrl}`,
  };

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

  const createReservationLink = displayReservation
    ? <Link to={`/room/${id}`} className="reserve-link">Reserve room.</Link>
    : null;

  return (
    <div className="room">
      { image }
      <div className="info-container">
        <div className="info-header">
          <h3 className="room-title">{ title }</h3>
          <div className="capacity icon-display">
            { capacityIcon }
            { capacityText }
          </div>
          <div className="private icon-display">
            { privateIcon }
            { privateText }
          </div>
        </div>
        <div className="info-body">
          {amenitiesComponent}
        </div>
        { createReservationLink }
      </div>
    </div>
  );
}

Room.defaultProps = {
  id: 1,
  imgUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  title: 'Hot desk',
  capacity: 1,
  privateRoom: false,
  amenities: [
    'Coffee machine',
    'Water',
    'Cable internet',
  ],
  displayReservation: false,
};

Room.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  capacity: PropTypes.number,
  privateRoom: PropTypes.bool,
  amenities: PropTypes.array,
  displayReservation: PropTypes.bool,
};
