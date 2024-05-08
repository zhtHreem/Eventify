import React, { useState, useEffect } from "react";
import "./CreateNewEvent.css";
import { BrowserRouter , Router, Route,  Routes ,Link,useNavigate} from 'react-router-dom';
// navigate('/banner', { state: { progress: progress + 1, handleProgressChange: handleProgressChange } });

function CreateNewEvent({navigate,handleProgressChange,progress}) {
    const [name, setName] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [EndTime, setEndTime] = useState('');
    const [StartTime, setStartTime] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const[info,setInfo]=useState('');
    //const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setSelectedOption(event.target.value);
    }
    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    }
    const handleStartTime = (event) => {
        setStartTime(event.target.value);
    }  
    const handleEndTime = (event) => {
        setEndTime(event.target.value);
    }
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    }
    const handleInfoChange=(event)=>{
        setInfo(event.target.value);
    }
    // Assume you have a function to fetch options from the database
    useEffect(() => {
        // Fetch options from the database (replace this with your actual fetching logic)
        const fetchedOptions = ["Option 1", "Option 2", "Option 3"];
        setOptions(fetchedOptions);
    }, []);

    useEffect(() => {
        const fetchedLocations = ["Location 1", "Location 2", "Location 3"];
        setLocations(fetchedLocations);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Logic to handle form submission
        console.log("Form submitted:");
        console.log("Event Title:", name);
        console.log("Event Category:", selectedOption);
        console.log("Start Date:", StartDate);
        console.log("Start Time:", StartTime);
        console.log("End Time:", EndTime);
        console.log("Location:", selectedLocation);
        console.log("Additional Information:", info);
        handleProgressChange(progress+1);
        navigate('/banner', { state: { progress: progress + 1} });

        
       
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
         <section>
            <h3 className="header">Event Details</h3>
             <p>
              <label htmlFor="Eventname">Event title:</label>
              <input type="text" id="Eventname"  placeholder="title" value={name}   onChange={handleNameChange} autoComplete="on" autoFocus/> 
              </p>
            <p>
              <label htmlFor="EventCategory">Event Category:</label>     
              <select id="myDropdown" value={selectedOption} onChange={handleCategoryChange}>
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </p>
         </section>

         <section>
            <h3 className="header">Date & Time</h3>
            
            <label htmlFor="StartDate" className="Datetime">
               <span>Start Date</span>
                <span>Start Time</span>
                <span>End Time</span>
                </label>

            <p>
              <input type="text" id="StartDate"  placeholder="Start Date" value={StartDate}   onChange={handleStartDate} autoComplete="on" autoFocus/>
              <input type="text" id="StartTime"  placeholder="12:00 AM" value={StartTime}   onChange={handleStartTime} autoComplete="on" autoFocus/>
              <input type="text" id="EndTime"  placeholder="12:00 AM" value={EndTime}   onChange={handleEndTime} autoComplete="on" autoFocus/> 
            </p>
         </section>

         <section>
            <h3 className="header">Location</h3>
            <p>
              <label htmlFor="Location">Venue:</label>     
              <select id="myLocationDropdown" value={selectedLocation} onChange={handleLocationChange}>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </p>
         </section>

         <section>
            <h3 className="header">Additional Information</h3>
            <p>
                <label htmlFor="info">Description:</label> 
                <textarea id="info" value={info}  placeholder="Speciality about your event" onChange={handleInfoChange}/>
            </p>
         </section>

         <button id="bs"htmlFor="bs" type="submit" onChange={handleSubmit} >Submit</button>
         </form>
      </div>
    );
  }
  
  export default CreateNewEvent;
