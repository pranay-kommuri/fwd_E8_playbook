const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');
const session = require('express-session'); // Import express-session

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware setup
app.use(session({
  secret: 'your-secret-key',  // Secret key for session encryption
  resave: false,
  saveUninitialized: true,
}));

// Serve all static files from the project directory
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
  const mainHtml = path.join(__dirname, 'index.html');
  res.sendFile(mainHtml);
});

// MongoDB connection setup
const uri = "mongodb://localhost:27017"; // Adjust to your MongoDB URI
const client = new MongoClient(uri);

let usersCollection;

client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
    const db = client.db('playbook'); // Updated database name
    usersCollection = db.collection('users'); // Updated collection name
  })
  .catch(err => console.error("Failed to connect to MongoDB:", err));

// Sign-up route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body; // Destructure form data

  if (!username || !email || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  try {
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists!" });
    }

    await usersCollection.insertOne({ username, email, password });
    res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error registering user" });
  }
});

// Sign-in route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send({ message: "All fields are required!" });
    }
  
    try {
      // Check if user exists with the provided credentials
      const user = await usersCollection.findOne({ email, password });
      if (!user) {
        return res.status(401).send({ message: "Invalid email or password!" });
      }
  
      // Set session variable for the logged-in user
      req.session.user = user;
  
      // Redirect back to the home page after successful sign-in
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error signing in" });
    }
  });
  

// Sign-out route (log out)
app.post('/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send({ message: "Error logging out" });
    }
    res.send({ message: "Signed out successfully!", loggedIn: false });
  });
});

// Route to check session for frontend
app.get('/check-session', (req, res) => {
  if (req.session.user) {
    res.json({
      loggedIn: true,
      username: req.session.user.username,  // Send the username back to the frontend
    });
  } else {
    res.json({
      loggedIn: false,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
