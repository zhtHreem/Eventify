import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { Link } from 'react-router-dom'; 
const DEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3500/api/all-events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventData = await response.json();
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Limit the number of events displayed
  const limitedEvents = events.slice(0, 6);

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', marginTop:'100px'}}>
      <Typography style={{marginleft:'100px'}} variant='h3' gutterBottom fontFamily="Poppins"> Events You May like</Typography>
      <Grid container spacing={3} style={{backgroundColor:"#1B4242"}}>
        {limitedEvents.map(event => (
          <Grid item xs={12} sm={4} key={event._id}>
            ;
             <Link to={`/event/${event._id}`} style={{ textDecoration: 'none' }}> {/* Wrap Paper with Link */}
            <Paper style={{ textAlign: 'center', paddingBottom: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
              <Typography variant="h6" gutterBottom>{event.name}</Typography>
              <Typography variant="body1">{event.startDate}</Typography>
              <Typography variant="body1">{event.startTime} - {event.endTime}</Typography>
              <Typography variant="body1">{event.selectedLocation}</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime style={{ fontWeight: "bold" }} />
                <Typography variant="body1" fontWeight="bold">{'${event.daysLeft}' } days left</Typography>
              </div>
            </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DEvents;