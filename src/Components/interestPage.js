import React, { useState } from 'react';
import "./interestPage.css" 
const InterestPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

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

  const handleSaveInterests = () => {
    // Handle saving selected interests, e.g., send to server, store in local storage, etc.
    console.log("Selected interests:", selectedInterests);
  };

  return (
    
    <div className="interest-page">   
    <h1 className="h1">Select your Interest</h1>
      <section className="interest-section">
        
        <h2>Music</h2>
        <ul>
        <li><input type="checkbox"/><label>s</label></li>
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
      
      
      {/* Repeat similar sections for other interest categories */}
      
      <button className="interestbutton"onClick={handleSaveInterests}>Save My Interests</button>
    </div>
  );
};

export default InterestPage;
