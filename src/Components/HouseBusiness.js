import React, { useState, useEffect } from 'react';
import './House.css';
const HouseBusinessList = () => {
  const [houseBusiness, setHouseBusiness] = useState([]);
  const [point, setPoint] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch house business data
  }, []);

  const handlePointChange = (event) => {
    setPoint(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPoint = {
      id: Date.now(),
      point,
      date
    };
    setHouseBusiness([...houseBusiness, newPoint]);
    setPoint('');
    setDate('');
  };

  // Sort the house business list by date in ascending order
  const sortedHouseBusiness = [...houseBusiness].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="house-business-container">
      <h2>House Business List</h2>
      <form className="point-form" onSubmit={handleSubmit}>
        <label htmlFor="point">Point:</label>
        <input type="text" id="point" className="point-input" value={point} onChange={handlePointChange} required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" className="date-input" value={date} onChange={handleDateChange} required />

        <button type="submit" className="add-button">Add Point</button>
      </form>

      <ul className="point-list">
        {sortedHouseBusiness.map((item) => (
          <li key={item.id} className="point-item">
            <h3 className="point-title">{item.point}</h3>
            <p className="point-date">Date: {item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseBusinessList;
