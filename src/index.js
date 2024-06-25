import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Routes,createBrowserRouter ,RouterProvider} from 'react-router-dom';
import ParentComponent from './Components/pages/newEvent';
import AddImage from './Components/addImage';
import Banner from './Components/pages/banner';
import CreateNewEvent from './Components/CreateNewEvent/CreateNewEvent';
import EventForm from './Components/tickettype';
import AddTicket from './Components/pages/addticket';
import InterestPage from './Components/interestPage';
import InterestedEvents from './Components/pages/interestedevents';
import EventResultsPage from './Components/eventPage';
import Event from './Components/pages/event';
import Login from './Components/pages/login';
import Homecomp from './Components/homecomp';
import Nav from './Components/nav';
import AutocompleteHint from './Components/AutocompleteHint';
import ShowEvents from './Components/showevent';
import PaymentForm from './Components/paymentForm';
import SignUp from './Components/signnup';
import AppAppBar from './Components/appbar';
import ToggleColorMode from './Components/ToggleColorMode';
import Footer from './Components/Footer';
import Features from './Components/features';
import Testimonials from './Components/testimonals';
import DEvents from './Components/diplayevents';
import Highlights from './Components/features';
import PageEvent from './Components/page';
import Feedback from './Components/feedback';
import Payment from './Components/payment';
import AboutUs from './Components/AboutUs';
import EventDetails from './Components/eventDetails';

import EventImage from './Components/eventImage';

const router = createBrowserRouter([
  
 
  {
    path: "/createevent",
    element: <ParentComponent/>,
  },{
    path : "/addImage",
    element : <AddImage/>,
  },
  {
    path : "/app",
    element : <App/>,

  },
  {
    path:"/banner",
    element:<Banner/>
  },
  {
    path:"/CreateNewEvent",
    element:<CreateNewEvent/>
  },
  {
    path:"/tickettype",
    element:<EventForm/>


  },
  {
    path:"/addticket",
    element:<AddTicket/>
  },
  {
    path:"/interestPage",
    element:<InterestPage/>
  },
  {
    path : "/interestedevents",
    element : <InterestedEvents />
  },{
    path:"/event",
    element: <Event/>
  },
  {
    path:"/eventPage",
    element: <EventResultsPage/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/",
    element: <Homecomp/>
  },
  
  {
      path:"/nav",
      element: <Nav/>
  },
  {
      path:"/autocomplete",
      element: <AutocompleteHint/>
  },
  {
    path:"/showevents/:search",
    element : <ShowEvents />,
  },
  {
    path:"/eventimages/:search",
    element:<EventImage/>
  }
  ,{
    path:"/paymentform",
    element:<PaymentForm/>
  },
  {
   path:"/signup",
   element:<SignUp/>
  },{
    path:"/appbar",
    element:<AppAppBar/>
  },
  {
    path:"/ToggleColorMode",
    element:<ToggleColorMode/>
  },
  {
    path:"/Footer",
    element:<Footer/>
  },
  {
    path:"/features",
    element:<Features/>
  },
  {
    path:"/testimonals",
    element:<Testimonials/>
  },
  {
    path:"/diplayevents",
    element:<DEvents/>
  },
{
 path:"/features",
 element:<Highlights/> 
},
{
  path:"/page",
  element:<PageEvent/>
},
{
  path:"/feedback",
  element:<Feedback/>
},
{
  path:"/payment",
  element:<Payment/>
}, 
{
  path:"/AboutUs",
  element:<AboutUs/>
}, 
{
  path:"/event/:search",
  element:<EventDetails/>
},  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();