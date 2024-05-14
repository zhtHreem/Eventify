import React, { useState } from 'react';
import ProgressBar from '../progressbar';
import { useLocation } from 'react-router-dom';
import EventForm from '../tickettype'
import { Container ,Typography} from '@mui/material';
import ProgressBar_2 from '../progressBar_2';
import { useParams } from 'react-router-dom';


//{ProgressBar}<ProgressBar />
  //        {AddImage}<AddImage />
  //const progress = location.state ? location.state.progress : 0;
  //const handleProgressChange = location.state ? location.state.handleProgressChange : () => {};
 // const { progress, handleProgressChange } = location.state || { progress: 0, handleProgressChange: () => {} };
 //const progress = location.state ? location.state.progress : 0;
const AddTicket= () =>{
  //const { search } = useParams();
  const location = useLocation();
  const eventId = location.state ? location.state.eventId : 0;
 console.log("EVENTIDD",eventId);
  const initialProgress=0;
  const [progress, setProgress] = useState(initialProgress);
  

  const handleProgressChange = (newProgress) => {
    // Logic to handle form submission
    // Assuming the form submission logic is successful, increment progress
    
    setProgress(newProgress);
    
  };
 return(

  <Container sx={{mt:10,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",paddingBottom:"50px",paddingTop:"50px",mb:10}}>
  <div className="addTicket">
         <Typography variant='h4'>Welcome to Our Website</Typography>
         <ProgressBar_2 progressValue={50}/>
         {/* <ProgressBar progress={progress} handleProgressChange={handleProgressChange} prev={{ pathname: '/banner', state: { progress } }} next=''/> */}
       <EventForm eventId={eventId}/>

  </div>
  </Container>
 );

};
export default AddTicket;