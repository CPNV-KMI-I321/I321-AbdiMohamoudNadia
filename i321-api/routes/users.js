/**
 * File: users.js
 * Description: Defines the API routes related to users.
 * Purpose: Provides access to user resources through the API.
 */

// Import the Express framework to create and manage routes
var express = require('express');
// Create a router to manage user-related routes
var router = express.Router();

// Temporary list of users used to test the API
var users = [
  {
    id: 1,
    name: 'Alice'
  }
];

// GET route to retrieve the list of users
router.get('/', function(req, res) {
  res.json(users);
});

// Export the router to make it available in app.js
module.exports = router;
