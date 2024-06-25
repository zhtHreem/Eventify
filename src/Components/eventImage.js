import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

const EventImage = ({ eventId=101 }) => {
  const [imageUrl, setImageUrl] = useState('');
  console.log("eventIDDD",eventId);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:3500/eventimages?search=${eventId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const data = await response.json();
        console.log("image id",data.imageName);
        setImageUrl(require(`../images/${data.imageName}`));
        
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    
    fetchImage();
  }, [eventId]);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h5"></Typography>
      </Grid>
      <Grid item>
        {imageUrl && <img src={imageUrl} alt="Event" style={{ maxWidth: '100%', maxHeight: '400px' }} />}
      </Grid>
    </Grid>
  );
};

export default EventImage;
