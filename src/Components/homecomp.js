import React, { useRef } from 'react';
import AppAppBar from './appbar';
import Footer from './Footer';
import DEvents from './diplayevents';

const Homecomp = () => {
    // Create a ref to the DEvents component
    const eventsRef = useRef(null);

    // Function to scroll to the DEvents section
    const scrollToEvents = () => {
        if (eventsRef.current) {
            eventsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <AppAppBar />
            <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                {/* Background Image */}
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(50%)' // Optional: to darken the image for better text contrast
                    }}
                    src={require('../images/1520110512948.jpg')}
                    alt="Background"
                />
                {/* Overlay Text */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff', // White text color for better contrast
                    padding: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
                    borderRadius: '10px',
                    maxWidth: '80%',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <h1 style={{ fontSize: '3rem', margin: '0' }}>Welcome to Eventify</h1>
                    <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
                        Discover, create, and manage events with ease. Join us for a seamless and engaging event experience.
                    </p>
                    <button
                        onClick={scrollToEvents}
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            color: '#fff',
                            backgroundColor: '#007bff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Explore Events
                    </button>
                </div>
            </div>
            {/* The DEvents component with ref for scrolling */}
            <div ref={eventsRef}>
                <DEvents />
            </div>
            <Footer />
        </div>
    );
}

export default Homecomp;
