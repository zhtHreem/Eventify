import React, { useState, useEffect  } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { useLocation, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


const ShowEvents = () => {

  const {search } = useParams();

  // console.log("ID:", search);
  let searchQuery

  // const search = new URLSearchParams(location.search).get("id");
  console.log("Search parameter:", search);

  const [events, setEvents] = useState([]);

  useEffect(()=>{

    const handleSearch = async () => {
      try {
        const response = await fetch(`http://localhost:3500/api/events?search=${search}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventData = await response.json();
        setEvents(eventData);
        console.log(events)
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    handleSearch()
  
  },[])

  return (
    <div style={{ padding: '20px', fontFamily: "Poppins" }}>
      <Typography variant='h3' gutterBottom fontFamily={"poppins"}>Interested Events</Typography>
      <Grid container spacing={3}>
        {events.map(event => (
          <Grid item xs={12} sm={4} key={event._id}>
            <Paper style={{ textAlign: 'center', paddingBottom: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
              {/* Render event details */}
              <Typography variant="h6" gutterBottom>{event.title}</Typography>
              <Typography variant="body1">{event.date}</Typography>
              <Typography variant="body1">{event.startTime} - {event.endTime}</Typography>
              <Typography variant="body1">{event.selectedLocation}</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime style={{ fontWeight: "bold" }} />
                <Typography variant="body1" fontWeight={'bold'}>{`${event.daysLeft} days left`}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ShowEvents;