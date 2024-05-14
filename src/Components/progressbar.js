import React, { useState } from 'react';
import { TiLink } from 'react-icons/ti';
import "./progressbar.css"
import { BrowserRouter , Router, Route,  Routes ,Link,useNavigate} from 'react-router-dom';
import { Container } from '@mui/material';
const ProgressBar = ({progress,handleProgressChange,prev,next}) => {
  /*const [stage, setStage] = useState(progress); */// Initial stage is 0
  const navigate=useNavigate();
  const stages = [
    { icon: <TiLink />, text: 'Start' },
    { icon: <TiLink />, text: 'Add Image' },
    { icon: <TiLink />, text: 'Add Ticks' },
    { icon: <TiLink />, text: 'Review' }
  ];

  const handleNext = () => {
    if (progress < stages.length - 1) {
      handleProgressChange(progress+1); // Increment stage
      navigate(next,{ state: { progress: progress + 1} });
    }
  };
  const handleBack = () => {
    if (progress > 0) {
        navigate(prev,{ state: { progress: progress - 1} });
        handleProgressChange(progress - 1); // Decrement stage
        
    }
  };

  return (
    <div>
    
      <div className="progress-bar">
        {stages.map((stageInfo, index) => (
          <div key={index} className={`stage ${index <= progress ? 'active' : ''}`}>
            {typeof stageInfo.icon === 'string' ? (
              <div>{stageInfo.icon}</div>
            ) : (
              <div className="icon">{stageInfo.icon}</div>
            )}
            <div className="text">{stageInfo.text}</div>
          </div>
        ))}
      </div>
      <button id="b1" onClick={handleBack}/* disabled={progress === 0}*/>
      Back
        </button>
      <button onClick={handleNext} disabled={progress === stages.length - 1}>
          Next
        </button>
        
    </div>

  );
};

export default ProgressBar;