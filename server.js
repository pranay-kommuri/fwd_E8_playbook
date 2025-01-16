const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');
const session = require('express-session');
const cors = require('cors'); // Added CORS middleware

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// MongoDB setup
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

let usersCollection, sportsCollection, sportsInfoCollection;

client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
    const db = client.db('playbook');
    usersCollection = db.collection('users');
    sportsCollection = db.collection('sports');
    sportsInfoCollection = db.collection('sportsinfo');
  })
  .catch(err => console.error("Failed to connect to MongoDB:", err));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));  // Admin panel for editing sports
});

app.get('/sports', async (req, res) => {
  try {
    const sportsData = await sportsCollection.find({}).toArray();
    res.json(sportsData);
  } catch (error) {
    res.status(500).send({ message: "Error fetching sports data" });
  }
});

app.get('/sportsinfo/:sportname', async (req, res) => {
  const sportName = req.params.sportname;
  try {
    const sportData = await sportsInfoCollection.findOne({
      sportname: { $regex: `^${sportName}$`, $options: 'i' } // Case-insensitive match
    });
    if (!sportData) {
      return res.status(404).send({ message: "Sport not found!" });
    }
    res.json(sportData);
  } catch (error) {
    res.status(500).send({ message: "Error fetching sport data" });
  }
});


// Edit sport name and content (like description)
app.post('/edit-sport', async (req, res) => {
  const { sportId, updatedSportName, updatedDescription, updatedImageUrl } = req.body;

  if (!sportId || !updatedSportName || !updatedDescription) {
    return res.status(400).send({ message: "Sport ID, name, and description are required!" });
  }

  try {
    // Convert the sportId to ObjectId
    const objectId = new MongoClient.ObjectId(sportId);

    // Update the sport name in the sports collection
    const sportUpdateResult = await sportsCollection.updateOne(
      { _id: objectId },
      { $set: { name: updatedSportName } }
    );

    // Update the content in the sportsinfo collection
    const contentUpdateResult = await sportsInfoCollection.updateOne(
      { sportname: updatedSportName },
      { $set: { content: updatedDescription, imageUrl: updatedImageUrl } }
    );

    if (sportUpdateResult.modifiedCount > 0 || contentUpdateResult.modifiedCount > 0) {
      res.json({ success: true, message: "Sport updated successfully!" });
    } else {
      res.status(400).json({ success: false, message: "Sport not found or already updated" });
    }
  } catch (error) {
    console.error("Error editing sport:", error);
    res.status(500).send({ message: "Error editing sport" });
  }
});

app.get('/get-sport/:sportId', async (req, res) => {
  const { sportId } = req.params;

  if (!sportId) {
    return res.status(400).send({ message: "Sport ID is required!" });
  }

  try {
    // Convert the sportId to ObjectId
    const objectId = new MongoClient.ObjectId(sportId);

    // Fetch sport details from both collections (sports and sportsinfo)
    const sport = await sportsCollection.findOne({ _id: objectId });
    const sportInfo = await sportsInfoCollection.findOne({ sportname: sport.name });

    if (!sport || !sportInfo) {
      return res.status(404).send({ message: "Sport not found!" });
    }

    // Send both sport and sportInfo data to the client
    res.json({
      sport: {
        _id: sport._id,
        name: sport.name
      },
      sportInfo: {
        content: sportInfo.content,
        imageUrl: sportInfo.imageUrl
      }
    });
  } catch (error) {
    console.error("Error fetching sport details:", error);
    res.status(500).send({ message: "Error fetching sport details" });
  }
});


// Create New Sport Route
app.post('/create-sport', async (req, res) => {
  const { newSportName, newSportContent, newSportImageUrl } = req.body;

  if (!newSportName || !newSportContent) {
    return res.status(400).send({ message: "Sport name and content are required!" });
  }

  try {
    // Insert the new sport into the sports collection
    await sportsCollection.insertOne({ name: newSportName });

    // Insert the new sport content into the sportsinfo collection
    await sportsInfoCollection.insertOne({
      sportname: newSportName,
      content: newSportContent,
      imageUrl: newSportImageUrl || "/assets/exploreimages/default.jpg"  // Default image if none provided
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).send({ message: "Error creating sport" });
  }
});

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

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
    res.status(500).send({ message: "Error registering user" });
  }
});

// Signin route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  try {
    const user = await usersCollection.findOne({ email, password });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password!" });
    }
    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    res.status(500).send({ message: "Error signing in" });
  }
});

app.post('/signout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).send({ message: "Error logging out" });
    } else {
      res.status(200).send({ loggedIn: false, message: "Signed out successfully!" });
    }
  });
});


// Check session route
app.get('/check-session', (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, username: req.session.user.username });
  } else {
    res.json({ loggedIn: false });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
