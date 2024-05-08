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

const router = createBrowserRouter([
  {
    path: "/",
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
  }
  
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