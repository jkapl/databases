var models = require('../models');

module.exports = {
  messages: {
    //get: function (req, res) {}, // a function which handles a get request for all messages
    get: ('/messages', (req, res) => {
      res.sendStatus(200);
    }),
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

