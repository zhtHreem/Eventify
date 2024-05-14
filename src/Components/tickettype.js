import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Select, 
  MenuItem 
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const EventForm = ( eventId ) => {
  const [eventType, setEventType] = useState('');
  const [tickets, setTickets] = useState([{ name: '', price: '' }]);
  const [ticketPriceError, setTicketPriceError] = useState('');
  const navigate = useNavigate();

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleTicketChange = (index, event) => {
    const { name, value } = event.target;

    // Check if the ticket price is a valid number
    if (name === "price" && isNaN(value)) {
      setTicketPriceError('Ticket price must be a number');
    } else {
      setTicketPriceError('');
    }

    const newTickets = [...tickets];
    newTickets[index][name] = value;
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!eventType) {
      console.error('Event type is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3500/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: eventId,
          eventType: eventType,
          tickets: tickets,
        }),
      });

      if (response.ok) {
        console.log('Event details submitted successfully');
        navigate(`/event/${eventId.eventId}`);
      } else {
        console.error('Failed to submit event details');
      }
    } catch (error) {
      console.error('Error submitting event details:', error);
    }
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom sx={{ fontFamily: "poppins" }}>Event Details</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventType">Event Type:</label>
          <Select sx={{ width: "50%", ml: 3 }} id="eventType" value={eventType} onChange={handleEventTypeChange}>
            <MenuItem value="">Select Event Type</MenuItem>
            <MenuItem value="free">Free Event</MenuItem>
            <MenuItem value="ticketed">Ticketed Event</MenuItem>
          </Select>
        </div>
        {tickets.map((ticket, index) => (
          <div key={index}>
            <Typography variant="h5" gutterbottom sx={{ fontFamily: "poppins", fontWeight: 600, mt: 2 }}>Ticket {index + 1}</Typography>
            <TextField
              required
              label="Ticket Name"
              value={ticket.name}
              name="name"
              onChange={(event) => handleTicketChange(index, event)}
            />
            <TextField
              required
              label="Ticket Price"
              value={ticket.price}
              name="price"
              error={!!ticketPriceError}
              helperText={ticketPriceError}
              sx={{ ml: 2 }}
              onChange={(event) => handleTicketChange(index, event)}
            />
            <Button type="button" onClick={() => handleRemoveTicket(index)} sx={{ ml: 2 }}>Remove Ticket</Button>
          </div>
        ))}
        <Button variant="contained" onClick={handleAddTicket} sx={{ mt: 5 }}>Add Ticket</Button>
        <Button variant="contained" type="submit" sx={{ mt: 5, ml: 5 }}>Submit</Button>
      </form>
    </div>
  );
};

export default EventForm;
