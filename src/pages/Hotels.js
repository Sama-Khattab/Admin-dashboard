import React, { useState } from 'react';
import "../style/lib.css";
import "../style/min.css";
import "../style/hotels.css";
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


const Hotels = () => {
  const [hotelData, setHotelData] = useState([]);
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle

    const handleAddOrUpdateHotel = () => {
    if (isUpdating) {
      // Update existing hotel
      const updatedHotelData = [...hotelData];
      updatedHotelData[updateIndex] = {
        date: date,
        price: price,
        location: location,
        image: image,
        description: description
      };
      setHotelData(updatedHotelData);
      setIsUpdating(false);
      setUpdateIndex(null);
    } else {
      // Add new hotel
      const newHotel = {
        date: date,
        price: price,
        location: location,
        image: image,
        description: description
      };
      setHotelData([...hotelData, newHotel]);
    }

    // Clear input fields after adding/updating hotel
    setDate('');
    setPrice('');
    setLocation('');
    setImage('');
    setDescription('');
  };

  const handleDeleteHotel = index => {
    const updatedHotelData = [...hotelData];
    updatedHotelData.splice(index, 1);
    setHotelData(updatedHotelData);
  };

  const handleUpdateHotel = index => {
    const hotelToUpdate = hotelData[index];
    setDate(hotelToUpdate.date);
    setPrice(hotelToUpdate.price);
    setLocation(hotelToUpdate.location);
    setImage(hotelToUpdate.image);
    setDescription(hotelToUpdate.description);
    setIsUpdating(true);
    setUpdateIndex(index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
  };

  return (
    <div className={`dashboard-container`}>
     
<div className='hotelcontrol'>
      <h1>{isUpdating ? 'Update Hotel' : 'Add Hotel'}</h1>
      <input  className="mdl-textfield__input" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input  className="mdl-textfield__input" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <input  className="mdl-textfield__input" type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
      <input  className="mdl-textfield__input" type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
      <textarea  className="mdl-textfield__input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button className='mdl-button mdl-js-button mdl-button--raised color--light-blue'  onClick={handleAddOrUpdateHotel}>{isUpdating ? 'Update Hotel' : 'Add Hotel'}</button>
      </div>
      <div className='availableHotls'>

      
      <h1>Hotels</h1>
      
          {hotelData.map((hotel, index) => (
        <div className='hotels'
         key={index}>
          <p>Date: {hotel.date}</p>
          <p>Price: {hotel.price}</p>
          <p>Location: {hotel.location}</p>
          <img src={hotel.image} alt="hotel" />
          <p>Description: {hotel.description}</p>
          <button className='mdl-button mdl-js-button mdl-button--raised color--light-blue' onClick={() => handleUpdateHotel(index)}>Update Hotel</button>
          <button className='mdl-button mdl-js-button mdl-button--raised color--light-blue' onClick={() => handleDeleteHotel(index)}>Delete Hotel</button>
        </div>
    ))}
        
</div>
     
    </div>
  );
};

export default Hotels;
