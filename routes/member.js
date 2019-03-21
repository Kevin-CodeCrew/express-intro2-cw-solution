// We need Express router to do anything
const express = require('express');

// We need this module for the 2 useless exported function
const payments = require('../payments');

// Let's start setting up the routes
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    res.send('Welcome to the Member Only Page')
});

// Handle signin
router.get('/signin', function (req, res) {
    res.send('Please sign in with your Member credentials')
});

// Parse out the phone number and name for this route
router.get('/contact/:phnumber/:name', function (req, res) {
    res.send(`Thanks ${req.params.name}! We will contact you shortly at ${req.params.phnumber}`)
});

// Extra
// CRASHES if u just return the number. Thinks HTTP response code

// Get whatever balance this returns
router.get('/getbalance', function (req, res) {
    res.send(`Current Balance is ${payments.getBalance()}`);
});

// Get whatever balance this returns
router.get('/paybalance', function (req, res) {
    res.send(`Current Balance after payment is ${payments.payBalance()}`);
});

// BONUS ROUTES

// Start at a zero balance
let currentBalance = 0;

// Add the provided amount to what we owe
router.post('/chargebalance/:amt', function (req, res) {
    let amount = parseInt(req.params.amt);
    currentBalance += amount;
    res.send(`Charged ${amount}. Your new balance you owe is ${currentBalance}`);
});

// Reduce amout owed by number passed in
router.post('/paybalance/:amt', function (req, res) {
    let amount = parseInt(req.params.amt);
    currentBalance -= amount;
    res.send(`Paid ${amount}. Your new balance is ${currentBalance}`);
});

// Export the whole shebang of routes
module.exports = router;