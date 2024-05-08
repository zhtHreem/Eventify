import React, { useState } from 'react';
import "./tickettype.css"
const EventForm = () => {
  const [eventType, setEventType] = useState('');
  const [tickets, setTickets] = useState([{ name: '', price: '' }]);

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleTicketChange = (index, event) => {
    const newTickets = [...tickets];
    newTickets[index][event.target.name] = event.target.value;
    setTickets(newTickets);
  };

  const handleAddTicket = () => {
    setTickets([...tickets, { name: '', price: '' }]);
  };

  const handleRemoveTicket = (index) => {
    const newTickets = [...tickets];
    newTickets.splice(index, 1);
    setTickets(newTickets);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Event Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventType">Event Type:</label>
          <select id="eventType" value={eventType} onChange={handleEventTypeChange}>
            <option value="">Select Event Type</option>
            <option value="free">Free Event</option>
            <option value="ticketed">Ticketed Event</option>
          </select>
        </div>
        {tickets.map((ticket, index) => (
          <div key={index}>
            <h3>Ticket {index + 1}</h3>
            <label htmlFor={`ticketName-${index}`}>Ticket Name:</label>
            <input
              type="text"
              id={`ticketName-${index}`}
              name="name"
              value={ticket.name}
              onChange={(event) => handleTicketChange(index, event)}
            />
            <label htmlFor={`ticketPrice-${index}`}>Ticket Price:</label>
            <input
              type="text"
              id={`ticketPrice-${index}`}
              name="price"
              value={ticket.price}
              onChange={(event) => handleTicketChange(index, event)}
            />
            <button type="button1" onClick={() => handleRemoveTicket(index)}>Remove Ticket</button>
          </div>
        ))}
        <button className="Add"type="button" onClick={handleAddTicket}>Add Ticket</button>
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
