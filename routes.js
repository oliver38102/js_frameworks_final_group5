// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const petRoutes = require('./routes/pets');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/pets', petRoutes);

// Exporting the changes
module.exports = app;