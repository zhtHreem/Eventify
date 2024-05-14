import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import AppAppBar from './appbar';
import Footer from './Footer';
import Nav from './nav';
import Testimonials from './testimonals';
import DEvents from './diplayevents';
import Highlights from './features';
const Homecomp = () => {
    const [events, setEvents] = useState([]);
   
  
      /*<Highlights/>*/
  
    return (
    <div>  
      <AppAppBar/>
      <DEvents/>

      <Testimonials/>
      <Footer/>
      </div>  
    );
  }
  
  export default Homecomp;