import React from 'react';
import Bttn from '../components/Bttn';
import { useDispatch } from 'react-redux';
import {setCoordinates} from '../store/locationSlice';

const LocationComponent = () => {
  
  const dispatch = useDispatch();

  const handleLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          dispatch(setCoordinates({ longitude, latitude }));},

        (error) => {console.error("Error getting location:", error);}
      );}
      
    else {console.log("Geolocation is not available in this browser.");}};
  
  return (
    <div onClick={handleLocationClick}>
      <Bttn text={'Show my Area'} width={'140px'} height={'60px'} font={'14px'}></Bttn>
    </div>
  );
};

export default LocationComponent;
