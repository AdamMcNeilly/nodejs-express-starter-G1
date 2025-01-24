const express = require('express');
const bodyParser = require('body-parser');
const UserService = require('./userService');

const app = express();
const userService = new UserService();

// Middleware to parse JSON body
app.use(bodyParser.json());

// Add user endpoint
app.post('/addUser', (req, res) => {
  try {
    const { name, address, salary, role, employeenumber } = req.body;

    // Validate required fields
    if (!name || !address || !salary || !role || !employeenumber) {
      return res.status(400).send('Missing required fields.');
    }

    // Create new user object
    const newUser = {
      name,
      address,
      salary: parseFloat(salary),
      role,
      employeeNumber: parseInt(employeenumber, 10),
    };

    // Add user using UserService
    const createdUser = userService.createUser(newUser);

    if (createdUser) {
      res.status(201).send('User added successfully!');
    } else {
      res.status(500).send('Failed to create user.');
    }
  } catch (error) {
    console.error('Error in /addUser:', error);
    res.status(500).send('Server error.');
  }
});

// chatgpt code for css visualisation of ejs files
const express = require('express');
app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));


// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

