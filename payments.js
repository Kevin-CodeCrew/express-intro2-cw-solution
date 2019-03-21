// A quite boring module just to prove
// the point that a routes module can pull in
// other modules just as the main 'app.js' module can
module.exports = {
    getBalance: function () {
        return 2112;
    },
    payBalance: function () {
        return 0;
    }

};