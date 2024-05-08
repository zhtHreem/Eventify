import React, { useState } from 'react';
import "./addImage.css" 
const AddImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const[previewURL,setSelectedUrl]=useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedUrl(URL.createObjectURL(event.target.files[0]))
  };

  const handleUpload = () => {
    // Logic to handle file upload
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      // Perform an HTTP request to upload the image using formData
      // For example, using fetch or axios
      // Example using fetch:
      fetch('upload-url', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          // Handle response
        })
        .catch((error) => {
          // Handle error
        });
    }
  };

  return (
    <div id='mydiv'>
      <h1 className='AAA'>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      {previewURL && (
        <img src={previewURL} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AddImage;
