/**
 * File: index.js
 * Description: Defines the main API routes.
 * Purpose: Handles requests to the root URL (/) and returns
 * a welcome message to confirm that the API is running.
 */


// Import the Express framework to create and manage routes
var express = require('express');

// Create an Express router to manage the main routes
var router = express.Router();

// GET route for the API root (/)
// Returns a welcome message in JSON format
router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the API'
  });
});
// Export the router to make it available in app.js
module.exports = router;
