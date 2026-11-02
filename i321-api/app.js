
/**
 * File: app.js
 *
 * Description: Main configuration file of the Express application.
 *
 * Purpose:
 * - Create the Express application.
 * - Configure middleware to process incoming requests.
 * - Register application routes.
 * - Handle requests to undefined routes.
 */

// Import the Express framework to create and manage the application
var express = require('express');

// Import Morgan to log incoming HTTP requests
var logger = require('morgan');

// Import CORS to control which origins can access the API
var cors = require('cors');

// Import the application routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Create an instance of the Express application
var app = express();


// ==================== MIDDLEWARE AND CONFIGURATION ====================

// Morgan logs incoming HTTP requests in the console.
// It displays the HTTP method, URL, status code and response time.
app.use(logger('dev'));

// Configure CORS (Cross-Origin Resource Sharing).
// Allows requests from the origin specified in the .env file.
// If CORS_ORIGIN is not defined, all origins are allowed (*).
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*'
}));

// Parse incoming requests containing JSON data.
// Makes the request body accessible through req.body.
app.use(express.json());

// Parse incoming requests containing URL-encoded data.
// Commonly used when submitting HTML forms.
// extended: false allows parsing simple key-value pairs.
app.use(express.urlencoded({ extended: false }));


// ==================== ROUTES ====================

// Mount the main router at the root URL ("/").
// All routes defined in indexRouter will be accessible from "/".
app.use('/', indexRouter);

// Mount the users router at "/api/users".
// All routes defined in usersRouter will start with "/api/users".
// Example: router.get('/') becomes GET /api/users.
app.use('/api/users', usersRouter);


// ==================== ERROR HANDLING ====================

// Handle requests that do not match any previously defined route.
// This middleware is executed only if no previous route has handled the request.
// Return HTTP status 404 (Not Found) with a JSON error message.
app.use(function(req, res) {
    res.status(404).json({
        message: 'Resource not found'
    });
});


// ==================== EXPORT APPLICATION ====================

// Export the Express application.
// The server startup file (bin/www) imports it to start the HTTP server.
module.exports = app;
