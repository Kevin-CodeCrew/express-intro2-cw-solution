// The routes mounted for Guest content
const express = require('express');
var router = express.Router()

// define the home page guest route
router.get('/', function (req, res) {
    res.send('Welcome to the Guest Support Page')
});

// Simple register route
router.get('/register', function (req, res) {
    res.send('Thank you wanting to register for this site!');
});

// This route has a dynamic URL where we parse out faux phone number
router.get('/contact/:phnumber', function (req, res) {
    res.send(`We will contact you shortly at ${req.params.phnumber} Guest!`);
});

// Export the whole shebang of routes
module.exports = router;