import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const EventResultsPage = ( eventId ) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3500/events/${eventId}`);
        if (response.ok) {
          const data = await response.json();
          setEvent(data);
        } else {
          console.error('Failed to fetch event');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };
    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
      {event ? (
        <>
          <Typography variant="h3" gutterBottom fontFamily="poppins">
            Event Details
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper style={{ textAlign: 'center', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' }}>
                <Typography variant="h6" gutterBottom>{event.name}</Typography>
                <Typography variant="body1">Start Date: {event.startDate}</Typography>
                <Typography variant="body1">Start Time: {event.startTime}</Typography>
                <Typography variant="body1">End Time: {event.endTime}</Typography>
                <Typography variant="body1">Location: {event.selectedLocation}</Typography>
                <Typography variant="body1">Info: {event.info}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="body1" fontFamily="poppins">Loading...</Typography>
      )}
    </div>
  );
};

export default EventResultsPage;