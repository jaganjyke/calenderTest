import React, { useState } from 'react';

function Calendar({ date }) {
    
    const [selectedDate, setSelectedDate] = useState(date);
  
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();  
    
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const handleDateClick = (day) => {
      const newDate = new Date(selectedDate);
      newDate.setDate(day);
      setSelectedDate(newDate);
    };
  
    return (
      <div className="calendar">
        <h2>{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <table className="table">
          <thead>
            <tr>
              {weekdays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil((daysInMonth + firstDay) / 7) }, (_, weekIndex) => (
              <tr key={weekIndex}>
                {weekdays.map((day, dayIndex) => {
                  const dayNumber = weekIndex * 7 + dayIndex - firstDay + 1;
                  return (
                    <td
                      key={dayIndex}
                      className={`day ${dayNumber > 0 && dayNumber <= daysInMonth ? '' : 'empty'} ${selectedDate.getDate() === dayNumber ? 'selected' : ''}`}
                      onClick={() => handleDateClick(dayNumber)}
                    >
                      {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default Calendar;