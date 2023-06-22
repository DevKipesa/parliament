import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CommitteeReports.css';

const CommitteeReports = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <div className='Committee'>
      <h2>COMMITTEEREPORTS</h2>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <button onClick={handleSubmit}>Generate Report</button>
    </div>
  );
};

export default CommitteeReports;
