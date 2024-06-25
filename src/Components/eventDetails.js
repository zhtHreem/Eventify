import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid,Paper ,Box} from '@mui/material';
import { CalendarToday, Schedule, LocationOn } from '@mui/icons-material'; // Import icons
import { useParams } from 'react-router-dom';
import AppAppBar from './appbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import EventImage from './eventImage';
import "./eventDetails.css"; // Import CSS file

const EventDetails = () => {
  const { search } = useParams();
  const [event, setEvent] = useState({});
  const[eventid,setEventId]=useState("");
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3500/api/eventId?search=${search}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvent(data);
        setEventId(data._id)
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
        <Grid  justifyContent="center" >
          
            <div className="event-details">

              <Typography variant="h3" className="event-name" style={{margin:'30px'}}>{event.name}</Typography>
              <Box sx={{  display: 'flex',justifyContent: 'space-between',flexWrap: 'wrap', '& > :not(style)': {  m: 1, width: { xs: '100%', sm: 300 }, height: 250,padding: '20px' ,marginLeft:'180px'  },}}>
                 <Box >
                    <div className="date" style={{display:'flex' ,margin:'10px'}}  >
                      <CalendarToday className="info-icon" />
                      <Typography variant="body1" className="info-text">{event.startDate}</Typography>
                    </div>
                    <div className="time"  style={{display:'flex',margin:'10px'}}>
                       <Schedule className="info-icon" />
                       <Typography variant="body1" className="info-text">{event.startTime}</Typography>
                    </div>
                    <div className="location" style={{display:'flex',margin:'10px'}}>
                       <LocationOn className="info-icon" />
                      <Typography variant="body1" className="info-text">{event.selectedLocation}</Typography>
                    </div>
                    <div className='organizer' style={{display:'flex',margin:'10px'}}>
                      <Typography variant="body1" className="event-host"style={{ fontWeight: 'bold' }}>Description:</Typography>
                      <Typography> {event.info}</Typography>
                    </div>
                 </Box>  
                 
                 {  /*change to 101-> event._id */}
                 <Paper elevation={3} style={{margin:'10px' ,marginRight:'130px'}}><EventImage eventId={101}/></Paper> 

                    
              </Box>
              <Link to="/payment">
                 <Button  variant="contained"  className="buy-ticket-button" style={{ backgroundColor: '#2b293d', color: 'white', borderRadius: '50px', margin:'30px' }}>
                   Buy Ticket 
                 </Button>
              </Link>
              
            </div>
          </Grid>
        
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
