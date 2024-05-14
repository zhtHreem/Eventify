import React, { useState } from 'react';
import ProgressBar from '../progressbar';
import { useLocation } from 'react-router-dom';
import AddImage from '../addImage';
import ProgressBar_2 from '../progressBar_2';
import { Container,Typography } from '@mui/material';

//{ProgressBar}<ProgressBar />
  //        {AddImage}<AddImage />
  //const progress = location.state ? location.state.progress : 0;
  //const handleProgressChange = location.state ? location.state.handleProgressChange : () => {};
 // const { progress, handleProgressChange } = location.state || { progress: 0, handleProgressChange: () => {} };
 //const progress = location.state ? location.state.progress : 0;
const Banner= () =>{
  const location = useLocation();
 /* const initialProgress = location.state ? location.state.progress : 0;*/
  const { initialProgress, eventId } = location.state || {  initialProgress: 0, eventId: null };
 
  const [progress, setProgress] = useState(initialProgress);
  

  const handleProgressChange = (newProgress) => {
    // Logic to handle form submission
    // Assuming the form submission logic is successful, increment progress
    
    setProgress(newProgress);
    
  };
 return(

  <Container sx={{mt:10,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",paddingBottom:"50px",paddingTop:"50px"}}>
    <Typography variant='h3' sx={{fontFamily:"poppins",fontWeight:700,textAlign:"center",mb:4}}>Welcome To Our Website</Typography>
         
         <ProgressBar_2  progressValue={40}  />
         {/* <ProgressBar progress={progress} handleProgressChange={handleProgressChange} prev='/'   next={{ pathname: '/addticket' }}/> */}
       <AddImage eventId={eventId}/>
         
  {/* Add more JSX components or elements as needed */}
  
  </Container>

 );

};
export default Banner;