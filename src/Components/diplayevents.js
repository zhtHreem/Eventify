import React, { useState, useEffect } from 'react';
import {Card, Grid, Paper, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { Link } from 'react-router-dom'; 
import EventImage from './eventImage';
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
    <div style={{ padding: '20px', fontFamily: 'Poppins', marginTop:'100px',marginRight:100}}>

      <Typography style={{margin:'20px'}} variant='h3' gutterBottom fontFamily="Poppins"> Events You May like</Typography>

      <Grid container spacing={3} style={{margin:'10px'}}>
        {limitedEvents.map(event => (
          <Grid item xs={12} sm={4} key={event._id} spacing={1}>
            
             <Link to={`/event/${event._id}`} style={{ textDecoration: 'none' }}> {/* Wrap Paper with Link */}
              <Paper elevation={3}  style={{ textAlign: 'center',  backgroundColor: 'rgba(252, 255, 255, 0.5)' }}> 
 
                <Typography variant="h6" gutterBottom>{event.name}</Typography>
              
                <Typography variant="body1">{event.selectedLocation}</Typography>
                 <Card style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                   <EventImage eventId={101}/>     {  /*change to 101-> event._id */}
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                       <AccessTime style={{ fontWeight: "bold" }} />
                       <Typography variant="body1" fontWeight="bold">
                           {Math.floor((new Date(event.startDate) - new Date()) / (1000 * 60 * 60 * 24))} days left
                       </Typography>
                   
                   </div>
                  </Card>  
             </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DEvents;