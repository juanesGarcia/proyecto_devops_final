import React, { useState, useEffect } from 'react';


export const Weather=({latitude,longitude})=> {
 console.log(typeof latitude,typeof longitude)
  const floatla = parseFloat(latitude);
  const floatlo = parseFloat(longitude);
  console.log(floatla,floatlo);
  const [weatherData, setWeatherData] = useState([]);
  

    const url=`https://api.open-meteo.com/v1/forecast?latitude=${floatla}&longitude=-74.18&hourly=temperature_2m&timezone=auto`;

  useEffect(() => {
    callApi();
  },[]);

  const callApi = async () => {
    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setWeatherData (responseJson);
        console.log(responseJson);
        } catch (error) {
          console.error(error);
        }
   
  };
  return (
    <div>
     
        <p>la latitud es: {weatherData.hourly?.time[0]}</p>
  
    
    </div>
  );
  
  
}
