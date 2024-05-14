import React from 'react';
import AppAppBar from './appbar'; // Import the AppAppBar component
import Footer from './Footer'; // Import the Footer component
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div>
      <AppAppBar /> {/* Include the AppAppBar component */}
      
      <div className="about-us-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Eventify</h1>
            <p>Your Premier Event Management Solution</p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Why Eventify?</h2>
            <p>
              Eventify is the leading event management company known for its exceptional service and attention to detail. 
              We strive to make every event memorable and exceed our clients' expectations.
            </p>
          </div>
        </section>

        <section className="events-section">
          <div className="events-content">
            <h2>Events We've Done</h2>
            <p>
              Over the years, Eventify has successfully organized a wide range of events, including corporate conferences,
              weddings, product launches, and more. Our portfolio speaks for itself, showcasing our expertise and creativity.
            </p>
          </div>
        </section>

        {/* Add more sections as needed */}

      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default AboutUs;
