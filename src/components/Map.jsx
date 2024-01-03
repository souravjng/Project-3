import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import {setMarkersfun} from '../store/locationSlice';
import styled from 'styled-components';



const MapContainer = ({ google }) => {
  const dispatch=useDispatch();
  const { longitude, latitude } = useSelector((state) => state.Location.coordinates);

  const [mapCenter, setMapCenter] = useState({ lat: latitude, lng: longitude });
  const [Markers, setMarkers] = useState(mapCenter);

  useEffect(() => {
    setMapCenter({ lat: latitude, lng: longitude });
  }, [latitude, longitude]);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const newMarker = {
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng(),
    };
    dispatch(setMarkersfun(newMarker));
    setMarkers(newMarker);
  };
  

  return (
    <Map google={google} zoom={14}  onGoogleApiLoaded={({ map, maps }) => {renderMarkers(map, maps);}} style={{ }} initialCenter={mapCenter} center={mapCenter} onClick={handleMapClick} >
      <Marker position={mapCenter} title={'This is your current location'}/>
      <Marker position={Markers} title={'You chose this location'} />
    </Map>
  );
};



export default GoogleApiWrapper({
  apiKey: 'AIzaSyBw8Gdvuwa7OWMEcyJCJxBXhvuCV78FaSQ',
})(MapContainer);



const MAPP = styled(Map)`
  width: 970px;
  height: 648px;
  @media only screen and (max-width: 768px) {
    height: 900px;
    width: 100%;
  }
`;