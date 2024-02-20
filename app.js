// Imports
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


// Variables
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '10440kb'}));

// ROUTES
// Admin Routes

// Application Routes
const applicationStadiumRoute = require('./routes/application/stadiumRoute');
const applicationTeamRoute = require('');
const applicationNewsRoute = require('');


app.use('/stadium', applicationStadiumRoute);
app.use('/teams', applicationTeamRoute);
app.use('/news', applicationNewsRoute);

app.get('/', (req, res, next) => {
    res.send('Merhaba Dünya!');
});

app.use('*', (req, res, next) => {
    res.send('404 Not Found!')
});


module.exports = app;