import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const AutocompleteHint = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [lastSearches, setLastSearches] = React.useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  const handleSearch = () => {
    if (inputValue) {
      // Add the search value to the last searches
      setLastSearches(prevSearches => [inputValue, ...prevSearches.slice(0, 4)]);
      // Navigate to the "showevents" page with the search value as a query parameter
      let id = inputValue
      console.log(id)
      navigate(`/showevents/${id}`);
    }
  };

  return (
    <Autocomplete
      disablePortal
      inputValue={inputValue}
      onInputChange={handleInputChange}
      filterOptions={(options, state) =>
        options.filter((option) =>
          option.label.toLowerCase().includes(state.inputValue.toLowerCase())
        )
      }
      id="combo-box-hint-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <Box sx={{ position: 'relative' }}>
          <Typography
            sx={{ position: 'absolute', opacity: 0.5, left: 14, top: 16 }}
          >
             {lastSearches.join(', ')}
          </Typography>
          <TextField
            {...params}
            label="Search Events"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </Box>
      )}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  // List of films
];

export default AutocompleteHint;