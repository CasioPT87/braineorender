const express = require('express');
const path = require('path')

// Create an instance of Express
const app = express();

// Middleware to set Access-Control-Allow-Origin header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Specify the allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify the allowed headers
    next();
  });

// Define a route
app.get('/sergi', (req, res) => {
    res.send('Hello, this is a basic Express application!');
});

app.get('/roci', (req, res) => {
    // Send the HTML file as a response
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
    const data = {
        name: 'Kevin',
        lastname: 'Schwantz',
        age: 32
    }
    res.json(data);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});