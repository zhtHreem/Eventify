import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function InputWithIcon() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3500/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          feedback
        }),
      });



      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Submit your Feedback</h1>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <TextField
          required
          id="input-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <TextField
          required
          id="input-email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField
          required
          id="input-feedback"
          label="Write feedback here"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <EditIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
  <Button variant="contained" onClick={handleSubmit}>Submit</Button>
 </Stack>
      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Feedback submitted successfully!
        </Alert>
      )}
    </Box>
    </Box>
  );
}