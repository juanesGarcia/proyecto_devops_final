import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import {Weather}  from './components/Weather';  

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude.toFixed(2));
        setLongitude(position.coords.longitude.toFixed(2));
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <h2>Your current location:</h2>
      {latitude && longitude ? (
        <p>Latitude: {latitude}, Longitude: {longitude}</p>
      ) : (
        <p>Loading location...</p>
      )}
    <Weather latitude={latitude} longitude={longitude}></Weather>
    <div className="container mt-3">
       <Formulario></Formulario>
     </div>
    </div>
      

   
  );
}

export default App;
