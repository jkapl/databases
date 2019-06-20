var models = require('../models');

module.exports = {
  messages: {
    //get: function (req, res) {}, // a function which handles a get request for all messages
    get: (req, res) => {
      console.log('hello');
      res.sendStatus(402);
    },
    post: function (req, res) {
      res.sendStatus(200);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

