// App.js
import React from 'react';
import { BrowserRouter , Router, Route,  Routes ,Link} from 'react-router-dom';
import ParentComponent from './Components/pages/newEvent';
import AddImage from './Components/addImage';
//import AddImage from '../Components/banner'; // Assuming Banner is the component for banner.js
//*{AddImage}<AddImage/>*/
 //<Link to="/addImage">CLICK HERE TO GO TO ADD IMAGE </Link>
const App = () => {
  return (
       
   <div>
      <div>Inside APP </div>
      
      <Link to="/interestPage">CLICKER HERE FOR BANNER</Link>
   </div>
  );
};

export default App;