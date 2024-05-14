import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import AppAppBar from './appbar';
import Footer from './Footer';
import "./interestPage.css" 

import InterestedEvents from './pages/interestedevents';

const InterestPage = () => {

  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  let [events,setEvents] = useState([]);

  const handleInterestToggle = (interest) => {
    const updatedInterests = [...selectedInterests];
    const index = updatedInterests.indexOf(interest);
    if (index === -1) {
      updatedInterests.push(interest);
    } else {
      updatedInterests.splice(index, 1);
    }
    setSelectedInterests(updatedInterests);
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch(`http://localhost:3500/eventsWithMatchingTags?selectedInterests=${JSON.stringify(selectedInterests)}`);
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
  
  const handleSaveInterests = () => {
    console.log("here")
    // if(selectedInterests.length > 0 )
      console.log(selectedInterests)
    fetchEvents();
    if(events.length !== 0)
      navigate('/interestedevents', { state: { events } });
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };


  return (
    <>      <AppAppBar />
    <div className="interest-page">   
    <h1 className="h1">Select your Interest</h1>
      <section className="interest-section">
        
        <h2>Music</h2>
        <ul>
        
          <li>
            <input  type="checkbox"  id="concerts"   onChange={() => handleInterestToggle("Concerts")}    />
            <label htmlFor="concerts">Concerts</label>
          </li>
          <li>
            <input  type="checkbox" id="music-festivals" onChange={() => handleInterestToggle("Music Festivals")} />
            <label htmlFor="music-festivals">Music Festivals</label>
          </li>
          <li>
            <input  type="checkbox" id="music-workshops" onChange={() => handleInterestToggle("Music Workshops")} />
            <label htmlFor="music-workshops">Music Workshops</label>
          </li>
          <li>
            <input  type="checkbox" id="dj-nights" onChange={() => handleInterestToggle("DJ Nights")} />
            <label htmlFor="dj-nights">DJ Nights</label>
          </li>
        </ul>
      </section>
      
      <section className="interest-section">
        <h2>Art and Culture</h2>
        <ul>
          <li>
            <input type="checkbox" id="art-exhibitions"onChange={() => handleInterestToggle("Art Exhibitions")}/>
            <label htmlFor="art-exhibitions">Art Exhibitions</label>
          </li>
          <li>
            <input type="checkbox" id="cultural-festivals"onChange={() => handleInterestToggle("Cultural Festivals")} />
            <label htmlFor="cultural-festivals">Cultural Festivals</label>
          </li>
        </ul>
      </section>

      <section className="interest-section">
        <h2>Sport & Fitness</h2>
        <ul>
          <li>
            <input type="checkbox" id="marathon"onChange={() => handleInterestToggle("Marathon")}/>
            <label htmlFor="Marathon">Marathon</label>
          </li>
          <li>
            <input type="checkbox" id="Fitness Workshops"onChange={() => handleInterestToggle("Fitness Workshops")} />
            <label htmlFor="Fitness Workshop">Fitness Workshops</label>
          </li>
        </ul>
      </section>
      <section className="interest-section">
        <h2>Family & Kids</h2>
        <ul>
          <li>
            <input type="checkbox" id="Children's Workshops"onChange={() => handleInterestToggle("Children's Workshop")}/>
            <label htmlFor="Children's Workshop">Children's Workshop</label>
          </li>
          <li>
            <input type="checkbox" id="Educational Activites"onChange={() => handleInterestToggle("Educational Activites")} />
            <label htmlFor="Educational Activites">Educational Activites</label>
          </li>
        </ul>
      </section>
      <section className="interest-section">
        <h2>Technology</h2>
        <ul>
          <li>
            <input type="checkbox" id="Tech Conferences"onChange={() => handleInterestToggle("Technology")}/>
            <label htmlFor="Tech Conferences">Technology</label>
          </li>
         
        </ul>
      </section>
      <section className="interest-section">
        <h2>Comedy & Entertainment</h2>
        <ul>
          <li>
            <input type="checkbox" id="Stand-up Comedy"onChange={() => handleInterestToggle("Stand-up Comedy")}/>
            <label htmlFor="Stand-up Comedy">Stand-up Comedy</label>
          </li>
          <li>
            <input type="checkbox" id="Magic Shows"onChange={() => handleInterestToggle("Magic Shows")} />
            <label htmlFor="Magic Shows">Magic Shows</label>
          </li>
        </ul>
      </section>
      <section className="interest-section">
        <h2>Travel & Adventure</h2>
        <ul>
          <li>
            <input type="checkbox" id="City Tours"onChange={() => handleInterestToggle("City Tours")}/>
            <label htmlFor="City Tours">City Tours</label>
          </li>
          <li>
            <input type="checkbox" id="Cultural Experience"onChange={() => handleInterestToggle("Cultural Experience")} />
            <label htmlFor="Cultural Experience">Cultural Experience</label>
          </li>
        </ul>
      </section>
      
      
      {/* Repeat similar sections for other interest categories */}
      
      <button className="interestbutton"onClick={handleSaveInterests}>Save My Interests</button>
       {/* Snackbar for displaying error */}
       <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="error">
          Please select at least one interest before saving.
        </MuiAlert>
      </Snackbar>
    </div>
    <Footer />
    </>
  );
};

export default InterestPage;