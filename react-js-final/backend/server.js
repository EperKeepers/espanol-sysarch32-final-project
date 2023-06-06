const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {// server.js

    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    
    const app = express();
    const PORT = process.env.PORT || 5000;
    const MONGO_URI = 'mongodb://localhost:27017/mydatabase';
    
    // MongoDB User schema
    const UserSchema = new mongoose.Schema({
      username: String,
      password: String,
    });
    
    const User = mongoose.model('User', UserSchema);
    
    // Middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    // Connect to MongoDB
    mongoose.connect(
      MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
        } else {
          console.log('Connected to MongoDB');
        }
      }
    );
    
    // Login route
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;
    
      try {
        // Check if user exists in the database
        const user = await User.findOne({ username });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Check if the provided password matches the stored password
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
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
