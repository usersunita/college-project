import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await axios.get('http://localhost/php%20backend/trips.php');
      setTrips(response.data);
    };

    fetchTrips();
  }, []);

  return (
    <div>
      {trips.map((trip) => (
        <div key={trip.id}>
          <h4>{trip.title}</h4>
          <img src={trip.image} alt={trip.title} />
          <p>{trip.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TripList;
