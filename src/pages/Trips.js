import React, { useState } from 'react';
import "../style/trips.css";
import "../style/lib.css";
import "../style/min.css";
const Trips = () => {
    
  const [tripData, setTripData] = useState([]);
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [destination, setDestination] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const handleAddTrip = () => {
    if (isUpdating) {
      // Update existing trip
      const updatedTripData = [...tripData];
      updatedTripData[updateIndex] = {
        date: date,
        price: price,
        destination: destination,
        image: image,
        description: description
      };
      setTripData(updatedTripData);
      setIsUpdating(false);
      setUpdateIndex(null);
    } else {
      // Add new trip
      const newTrip = {
        date: date,
        price: price,
        destination: destination,
        image: image,
        description: description
      };
      setTripData([...tripData, newTrip]);
    }
    // Clear input fields after adding trip
    setDate('');
    setPrice('');
    setDestination('');
    setImage('');
    setDescription('');
  };

  const handleDeleteTrip = index => {
    const updatedTripData = [...tripData];
    updatedTripData.splice(index, 1);
    setTripData(updatedTripData);
  };

 const handleUpdateTrip = index => {
    const tripToUpdate = tripData[index];
    setDate(tripToUpdate.date);
    setPrice(tripToUpdate.price);
    setDestination(tripToUpdate.destination);
    setImage(tripToUpdate.image);
    setDescription(tripToUpdate.description);
    setIsUpdating(true);
    setUpdateIndex(index);
  };

  return (
    <div className='main'>
    <div className='trips'>
        <h1>Add Trip</h1>
        
      <input  className="mdl-textfield__input" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input  className="mdl-textfield__input" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <input  className="mdl-textfield__input" type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
      <input  className="mdl-textfield__input" type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
      <textarea  className="mdl-textfield__input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button className='mdl-button mdl-js-button mdl-button--raised color--light-blue' onClick={handleAddTrip}>Add Trip</button>
      </div>
      <div className='availableTriops'>
      <h1>Trips</h1>
      
        {tripData.map((trip, index) => (
        <div className='contentTrip' key={index}>
          <p>Date: {trip.date}</p>
          <p>Price: {trip.price}</p>
          <p>Destination: {trip.destination}</p>
          <img src={trip.image} alt="trip" />
          <p>Description: {trip.description}</p>
          <button className='mdl-button mdl-js-button mdl-button--raised color--light-blue' onClick={() => handleUpdateTrip(index)}>Update Trip</button>
          <button className='mdl-button mdl-js-button mdl-button--raised color--light-blue' onClick={() => handleDeleteTrip(index)}>Delete Trip</button>
        </div>
      ))}

  
      </div>
      </div>
  );
};

export default Trips;
