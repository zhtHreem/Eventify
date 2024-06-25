const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const multer = require('multer');
const path = require('path'); // Import path module
const { ObjectId } = require('mongodb');

const app = express();
const port = 3500;

// Middleware
app.use(express.json());
app.use(cors());

// Serve images from the backend uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../src/images/'); // You can specify the upload directory here
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix=Date.now();
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
const uploads=multer({dest:'uploads/'});
// Connect to MongoDB
const uri = 'mongodb+srv://admin:123@eventify.dkeujvr.mongodb.net/?retryWrites=true&w=majority&appName=eventify';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectMongoDB();


// API endpoint to search events by title
app.get('/api/eventId', async (req, res) => {
  const { search } = req.query;
  console.log("dshakdhka",search)
  try {
    const db = client.db('eventify'); 
    const collection = db.collection('events');
    const objectId = new ObjectId(search);
    const event = await collection.findOne({ _id: objectId });
    console.log('Fetched events:', event); 
    res.json(event);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/users', async (req, res) => {
  try {
    const userData = req.body; // Extract user data from the request body
    const database = client.db('eventify');
    const collection = database.collection('users');

    // Insert user data into the MongoDB collection
    const result = await collection.insertOne(userData);

    console.log('User created:', result.insertedId);
    res.status(201).json({ message: 'User created successfully', userId: result.insertedId });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/feedback', async (req, res) => {
  try {
    const feedbackData = req.body; // Extract feedback data from request body
    const database = client.db('eventify'); // Replace <your-database-name> with your actual database name
    const collection = database.collection('feedback');
    
    // Insert feedback data into MongoDB
    const result = await collection.insertOne(feedbackData);

    console.log('Feedback received:', result.insertedId);
    res.status(201).json({ message: 'Feedback received successfully', feedbackId: result.insertedId });
  } catch (error) {
    console.error('Error receiving feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Fetched events:', email); 
    const database = client.db('eventify');
    const collection = database.collection('users');

    // Find the user with the provided email
    const user = await collection.findOne({ email,password  });
    console.log('Fetched events:', user); 
    // If user not found or password is incorrect, return 401 Unauthorized
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, return 200 OK
    res.status(200).json({ message: 'Authentication successful', user });
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'Internal server error' });
  } 
});

// API endpoint to search events by selected interests
app.get('/eventsWithMatchingTags', async (req, res) => {
  const { selectedInterests } = req.query;
  const interestsArray = JSON.parse(selectedInterests);
console.log(interestsArray);

  try {
   

    // Access the events collection
    const db = client.db('eventify'); // Replace 'your-database-name' with your actual database name
    const eventsCollection = db.collection('events');
    const query = { selectedOption : { $in: interestsArray } };
    const events = await eventsCollection.find(query).toArray();
    console.log(events)
    // Return events as JSON response
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  } 
});


 // API endpoint to search events by title
app.get('/api/events/profile', async (req, res) => {
  const { search } = req.query;

  try {
    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Access the events collection
    const db = client.db('eventify'); // Replace 'your-database-name' with your actual database name
    const eventsCollection = db.collection('events');

    // Define search query
    const query = search ? { selectedOption: { $regex: search, $options: 'i' } } : {};   //change title to category
    // Find events matching the search query
    const events = await eventsCollection.find(query).toArray();
    console.log('Fetched events:', events); 
    // Return events as JSON response
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}); 
// API endpoint to search events by title
app.get('/api/events', async (req, res) => {
  const { search } = req.query;
 
  try {
    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Access the events collection
    const db = client.db('eventify'); // Replace 'your-database-name' with your actual database name
    const eventsCollection = db.collection('events');

    // Define search query
    const query = search ? { name: { $regex: search, $options: 'i' } } : {};   //change title to category
    console.log('query events:', search); 
    // Find events matching the search query
    const events = await eventsCollection.find(query).toArray();
    console.log('Fetched events:', events); 
    // console.log(events)
    // Return events as JSON response
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// API route to fetch all events
app.get('/api/all-events', async (req, res) => {
  try {
    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Access the events collection
    const db = client.db('eventify');
    const eventsCollection = db.collection('events');

    // Fetch all events
    const events = await eventsCollection.find({}).toArray();
    
    // Limit the number of events returned
    const limitedEvents = events.slice(0, 6);

    // Return the limited events as JSON response
    res.json(limitedEvents);
  } catch (error) {
    console.error('Error fetching all events:', error);
    res.status(500).json({ error: 'Internal server error' });
  } 
});
// Define routes
app.get('/users', async (req, res) => {
    try {
      const database = client.db('eventify'); // Replace <your-database-name> with your actual database name
      const collection = database.collection('users');
  
      const users = await collection.find({}).toArray();
    
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Define a route to handle POST requests to /events
app.post('/events', async (req, res) => {
  try {
    const eventData = req.body; // Extract event data from request body
    const database = client.db('eventify'); // Replace <your-database-name> with your actual database name
    const collection = database.collection('events');
    
    // Insert event data into MongoDB
    const result = await collection.insertOne(eventData);

    console.log('Event created:', result.insertedId);
    //res.status(201).json({ message: 'Event created successfully', eventId: result.insertedId });
    res.json( result.insertedId);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route to handle POST requests to /eventimages
app.post('/eventimages', upload.single('image'), async (req, res) => {
  try {
    
    const eventId = req.body.eventId;
    const imageName = req.file.originalname; // Extract image name from uploaded file

    const database = client.db('eventify'); // Replace <your-database-name> with your actual database name
    const collection = database.collection('eventimage');
    
    // Insert image data into MongoDB
    const result = await collection.insertOne({ eventId, imageName });

    console.log('Image uploaded for event:', eventId);
    res.status(201).json({ message: 'Image uploaded successfully', imageId: result.insertedId });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route to handle GET requests for retrieving image filename by event ID
app.get('/eventimages', async (req, res) => {
  try {
    const  eventId = req.query.search;

    const database = client.db('eventify');
    const collection = database.collection('eventimage');
    console.log(' event:', eventId);
    // Find the image filename based on the provided event ID
    const result = await collection.findOne({ eventId });
    console.log('Fetched image detail:', result); 
    if (!result) {
      return res.status(404).json({ error: 'Image not found for the given event ID' });
    }

    // Return the image filename
    res.json({ imageName: result.imageName });
  } catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route to handle POST requests to /tickets
app.post('/tickets', async (req, res) => {
  try {
    const ticketData = req.body; // Extract ticket data from request body
    const database = client.db('eventify'); // Replace <your-database-name> with your actual database name
    const collection = database.collection('tickets');
    
    // Insert ticket data into MongoDB
    const result = await collection.insertOne(ticketData);

    console.log('Ticket created:', result.insertedId);
    res.status(201).json({ message: 'Ticket created successfully', ticketId: result.insertedId });
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



