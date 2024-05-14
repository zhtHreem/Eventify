import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';
import { Star } from '@mui/icons-material';
import { AccessTime } from '@mui/icons-material';
import { useLocation, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import AppAppBar from '../appbar';
import Footer from '../Footer';
const InterestedEvents = () => {
const location = useLocation();
const { events } = location.state;

// Now you can use myArray in your component
console.log(events);
  return (
    <>      <AppAppBar />
    <div style={{ padding: '20px', fontFamily: "Poppins" }}>
      <Typography style={{margin:"100px"}} variant='h3' gutterBottom fontFamily={"poppins"}>Interested Events</Typography>
      <Grid container spacing={3}>
        {events.map(event => (
            // <Typography>{event.name}</Typography>
          <Grid item xs={12} sm={4} key={event.id}>
            <Link to={`/event/${event._id}`} style={{ textDecoration: 'none' }}> {/* Wrap Paper with Link */}
            <Paper style={{ textAlign: 'center', paddingBottom: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
              <Typography variant="h6" gutterBottom>{event.name}</Typography>
                <Typography variant="body1">Start Date: {event.startDate}</Typography>
                <Typography variant="body1">Start Time: {event.startTime}</Typography>
                <Typography variant="body1">End Time: {event.endTime}</Typography>
                <Typography variant="body1">Location: {event.selectedLocation}</Typography>
                <Typography variant="body1">Info: {event.info}</Typography>
              {/* Render event details */}
              {/* Adjust event rendering based on your data structure */}
            </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
    <Footer />
    </>
  );
}

export default InterestedEvents;