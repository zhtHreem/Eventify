import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CreateNewEvent from '../CreateNewEvent/CreateNewEvent';
import ProgressBar from '../progressbar';
import AddImage from '../addImage';


const ParentComponent = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();


  const handleProgressChange = (newProgress) => {
    // Logic to handle form submission
    // Assuming the form submission logic is successful, increment progress
    
    setProgress(newProgress);
    
  };

  return (
    <div>
      <ProgressBar progress={progress} handleProgressChange={handleProgressChange} prev='/' next='/banner'/>
      <CreateNewEvent navigate={navigate} handleProgressChange={handleProgressChange} progress={progress} />
     
   
    
    </div>
  );
};

export default ParentComponent;
