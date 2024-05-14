import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
//import AutocompleteHint from './autocomplete'; // Assuming this is the Autocomplete component
import AutocompleteHint from './AutocompleteHint';
//import AutocompleteHint from './AutocompleteHint';
const NavWithAutocomplete = () => {
    
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor:"#CD1818"}}>
      <div role="presentation" onClick={handleClick} style={{backgroundColor:"#CD1818"}}>
        <Breadcrumbs aria-label="breadcrumb">
        <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Eventify
          </Typography>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            MUI
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Core
          </Link>
          
        </Breadcrumbs>
      </div>
      <AutocompleteHint />
    </div>
  );
};

export default NavWithAutocomplete;