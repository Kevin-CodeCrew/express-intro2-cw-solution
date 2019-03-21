// #0 Initial Setup Stuff
const express = require('express')
const app = express();

// Setup to serve static but not this time
app.use(express.static('public'));

// Fire up the server
app.listen(8000, () => {
    console.log('App listening on port 8000!')
});

// #1 Pull in routes and eventually set the mount points
const guest = require('./routes/guest.js');
const member = require('./routes/member.js');

// #2 Mount route points
app.use('/guest', guest);
app.use('/member', member);

// Do the Color Wheel!
// Cleaner ways 2 do this but yeah... makes the point
app.get('/colorwheel/:r/:g/:b', function (req, res) {
    res.send('<html>' +
        '<head>' +
        '<style>' +
        'body {' +
        `background-color: rgb(${req.params.r}, ${req.params.b}, ${req.params.g});` +
        '}' +
        '</style>' +
        '</head>' +
        '<body>' +
        '</body>' +
        '</html>')
});

