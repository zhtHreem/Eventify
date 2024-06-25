import React, { useState } from 'react';
import {  Button, Grid, Typography } from '@mui/material';
import "./addImage.css";
import { useNavigate } from "react-router-dom";


const AddImage = ({eventId}) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setPreviewURL(URL.createObjectURL(event.target.files[0]));
  };

  

  const handleUpload = async () => {
    try {
      if (selectedFile && eventId) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('eventId', eventId); 
  
        const response = await fetch('http://localhost:3500/eventimages', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Image uploaded successfully');
         
          navigate("/addticket", { state: { eventId } });
        } else {
          console.error('Failed to upload image');
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <Grid sx={{mt:5,mb:8}} container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5" className="AAA">Upload Image</Typography>
      </Grid>
      <Grid item>
        <input type="file" onChange={handleFileChange} />
      </Grid>
      {previewURL && (
        <Grid item>
          <img src={previewURL} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </Grid>
      )}
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleUpload}>Upload</Button>
      </Grid>
    </Grid>
  );
};

export default AddImage;