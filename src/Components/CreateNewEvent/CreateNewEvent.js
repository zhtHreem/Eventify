import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextareaAutosize,
  Grid
} from "@mui/material";
// import "./CreateNewEvent.css";
import { useNavigate } from "react-router-dom";

function CreateNewEvent({ handleProgressChange, progress }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [options, setOptions] = useState(["Concerts", "Music Festivals", "Music Workshops","DJ Nights","Art Exhibitions","Cultural Festivals","Marathon","Fitness Workshops","Children's Workshop","Tech Conferences","Stand-up Comedy","Magic Shows","City Tours","Cultural Experience"]);
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [locations, setLocations] = useState(["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Gujranwala", "Sialkot"]
);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
 
  }, []);

  useEffect(() => {
   
    //localStorage.removeItem('eventData')
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
  };
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };

  
   
  
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if (!name || !selectedOption || !startDate || !startTime || !endTime || !selectedLocation || !info) {
      setSnackbarMessage('All fields are required');
      setOpenSnackbar(true);
      return;
    }
     // Check if start time is before end time
    if (startTime >= endTime) {
      setSnackbarMessage("Start time must be before end time");
      setOpenSnackbar(true);
      return;
    }
    try {
      const response = await fetch("http://localhost:3500/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          selectedOption,
          startDate,
          startTime,
          endTime,
          selectedLocation,
          info,
        }),
      });

      if (response.ok) {
        console.log("Event created successfully");
        // Update progress and navigate
        const eventData = await response.json();
        const eventId = eventData; // Assuming the response contains the new event'
        console.log("sgjajsg",eventData)
        handleProgressChange(progress + 1);
        navigate("/addticket", {state:{eventId}});
       // navigate(`/addticket/${eventData}`);
      } else {
        console.error("Failed to create event");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Adjust as needed
        onClose={() => setOpenSnackbar(false)}
>
        <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
          {snackbarMessage}
        </Alert>
     </Snackbar>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              label="Event Title"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">Event Category</InputLabel>
              
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedOption}
                onChange={handleCategoryChange}
                label="Event Category"
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              variant="outlined"
              fullWidth
              type="date"
              value={startDate}
              onChange={handleStartDate}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
            required
              label="Start Time"
              variant="outlined"
              fullWidth
              type="time"
              value={startTime}
              onChange={handleStartTime}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
            required
              label="End Time"
              variant="outlined"
              fullWidth
              type="time"
              value={endTime}
              onChange={handleEndTime}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">Venue</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedLocation}
                onChange={handleLocationChange}
                label="Venue"
              >
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextareaAutosize
            required
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Additional Information"
              style={{ width: "100%" }}
              value={info}
              onChange={handleInfoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ margin: "8px 0" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateNewEvent;