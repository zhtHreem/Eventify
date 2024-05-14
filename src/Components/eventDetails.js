import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { CalendarToday, Schedule, LocationOn } from '@mui/icons-material'; // Import icons
import { useParams } from 'react-router-dom';
import AppAppBar from './appbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

import "./eventDetails.css"; // Import CSS file

const EventDetails = () => {
  const { search } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3500/api/eventId?search=${search}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvent(); // Invoke the fetchEvent function here
  }, [search]); // Update the dependency array to include 'search'

  return (
    <>
      <AppAppBar />
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <div className="event-details">
              <Typography variant="h3" className="event-name">{event.name}</Typography>
              <div className="event-info">
                <CalendarToday className="info-icon" />
                <Typography variant="body1" className="info-text">{event.startDate}</Typography>
              </div>
              <div className="event-info">
                <Schedule className="info-icon" />
                <Typography variant="body1" className="info-text">{event.startTime}</Typography>
              </div>
              <div className="event-info">
                <LocationOn className="info-icon" />
                <Typography variant="body1" className="info-text">{event.selectedLocation}</Typography>
              </div>
              <Typography variant="body1" className="event-host">Organizer: {event.info}</Typography>


// Inside your component render function
<Link to="/payment">
  <Button 
    variant="contained" 
    className="buy-ticket-button" 
    style={{ backgroundColor: '#2b293d', color: 'white', borderRadius: '50px' }}
  >
    Buy Ticket
  </Button>
</Link>

            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
