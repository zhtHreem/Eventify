
// App.js
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>Inside APP </div>
      <Link to="/interestPage">CLICK HERE FOR BANNER</Link>
    </div>
  );
};

export default App;
