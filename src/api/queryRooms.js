import apiCaller from './apiCaller';

const queryRooms = setRooms => {
  const response = (status, json) => {
    if (status === 200) {
      setRooms(json);
    } else {
      console.log('error');
    }
  };

  apiCaller('GET', '/rooms', null, () => {}, response);
};

export default queryRooms;
