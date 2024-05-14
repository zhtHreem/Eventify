import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Nav from './nav'; // assuming Nav is a component in the same directory

const PageEvent = () => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventId = "Art"; // define eventId as a string
        const response = await fetch(`http://localhost:3500/api/events/profile?search=${eventId}`);
        if (response.ok) {
          const eventData = await response.json();
          console.log('Fetched events:', eventData); 
          setEvent(eventData);
        } else {
          console.error('Failed to fetch event');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: "Poppins" }}>
      <Nav />
      <Grid container spacing={3}>
        {Object.keys(event).length > 0 ? ( // Check if event object is not empty
          <>
          
            <Grid item xs={12}>
              <Typography variant="h3" gutterBottom>{event.name}</Typography>
            </Grid>
            <Grid item xs={12} key={event.id}>
              <Typography variant="body1">Date: {event.startDate}</Typography>
              <Typography variant="body1">Time: {event.startTime}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Location: {event.selectedLocation}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Hosted by: {event.hostName}</Typography>
              <Button variant="contained" color="primary">Buy Ticket</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{event.info}</Typography>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>Loading...</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default PageEvent;