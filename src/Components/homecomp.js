import React, { useState, useEffect } from 'react';

import AppAppBar from './appbar';
import Footer from './Footer';

import DEvents from './diplayevents';
import { Link } from 'react-router-dom';
const Homecomp = () => {
    const [events, setEvents] = useState([]);
   
  
      /*<Highlights/>*/
  
    return (
    <div>  
      <AppAppBar/>
      <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}>
      
         <img style={{ width: '100%', height: '100%' }}src={require(`../images/1520110512948.jpg`)} />
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <Link to="/createevent">
               <button>Create New Event</button>
            </Link>
          </div>
      </div>
      <DEvents/>

      <Footer/>
      </div>  
    );
  }
  
  export default Homecomp;