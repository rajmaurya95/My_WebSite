import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
      className='form-select'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // You can customize the date format
        isClearable // Adds a clear button to reset the date
        placeholderText="Select a date"
      />
    </div>
  );
}

export default DateSelector;
