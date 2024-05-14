import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProgressBar_2 from '../progressBar_2';
import CreateNewEvent from '../CreateNewEvent/CreateNewEvent';
import AppAppBar from '../appbar';
import Footer from '../Footer';

const ParentComponent = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3500/users');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean-up logic here (if any)
    };
  }, []);

  return (
    <>      <AppAppBar />
    <div>
      <Container sx={{ mt: 10, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", paddingBottom: "50px", paddingTop: "50px" }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <Typography variant='h2' sx={{ fontFamily: "Poppins", textAlign: "center", fontWeight: 700 }}>Event Details</Typography>
        <ProgressBar_2 progressValue={15} />
        <CreateNewEvent navigate={navigate} handleProgressChange={handleProgressChange} progress={progress} />
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default ParentComponent;