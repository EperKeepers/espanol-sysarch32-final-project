const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URL;
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('sysarch32-database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
app.post('/login', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password === password) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/register', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const { firstName, lastName, contactNo, email, password } = req.body;
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = {
      firstName,
      lastName,
      contactNo,
      email,
      password,
    };
    const result = await db.collection('users').insertOne(newUser);
    if (result.insertedId) {
      return res.status(200).json({ message: 'Registration successful' });
    } else {
      return res.status(500).json({ message: 'Failed to register user' });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
